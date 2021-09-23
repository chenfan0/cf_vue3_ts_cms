import { Module } from 'vuex'

import { accountLoginRequest, requestUserInfoById, requestUserMenusByRoleId } from '@/network/login'
import { ILoginParamsType } from '@/network/login/type'
import localCatch from '@/utilis/cache'
import router from '@/router'
import { mapMenusToRoutes, mapMenuToPermission } from '@/utilis/mapMenu'

import { IRootStateType } from '../type'
import { ILoginStateType } from './type'

const loginModule: Module<ILoginStateType, IRootStateType> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: '',
      userMenu: [],
      userPermission: []
    }
  },
  mutations: {
    changeToken(state, payload: string) {
      state.token = payload
    },
    changeUserInfo(state, payload) {
      state.userInfo = payload
    },
    changeUserMenu(state, payload) {
      state.userMenu = payload
      // 进行动态路由注册
      const routes = mapMenusToRoutes(state.userMenu)
      if (routes) {
        routes.forEach((route) => router.addRoute('main', route))
      }
      // 获取用户权限
      state.userPermission = mapMenuToPermission(state.userMenu)
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: ILoginParamsType) {
      // 1 实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      commit('changeToken', loginResult.data.token)
      localCatch.setCatch('token', loginResult.data.token)

      // 2 获取用户信息
      const userInfo = await requestUserInfoById(loginResult.data.id)
      commit('changeUserInfo', userInfo.data)
      localCatch.setCatch('userInfo', userInfo.data)

      // 3 获取用户权限菜单
      const userMenu = await requestUserMenusByRoleId(loginResult.data.id)
      commit('changeUserMenu', userMenu.data)
      localCatch.setCatch('userMenu', userMenu.data)

      // 4 路由跳转
      router.push('/main')
    },
    // 初始化store，防止刷新时数据消失
    setupLoginStoreAction({ commit }) {
      if (localCatch.getCatch('token')) {
        commit('changeToken', localCatch.getCatch('token'))
      }
      if (localCatch.getCatch('userInfo')) {
        commit('changeUserInfo', localCatch.getCatch('userInfo'))
      }
      if (localCatch.getCatch('token')) {
        commit('changeToken', localCatch.getCatch('token'))
      }
      if (localCatch.getCatch('userMenu')) {
        commit('changeUserMenu', localCatch.getCatch('userMenu'))
      }
    }
  }
}

export default loginModule
