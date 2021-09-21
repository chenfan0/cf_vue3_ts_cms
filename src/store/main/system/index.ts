import { Module } from 'vuex'
import { IRootStateType } from '@/store/type'
import { ISystemType } from './type'

import { getPageListData } from '@/network/system'

const systemModule: Module<ISystemType, IRootStateType> = {
  namespaced: true,
  state() {
    return {
      usersCount: 0,
      usersList: [],
      roleList: [],
      roleCount: 0
    }
  },
  getters: {},
  mutations: {
    changeUsersCount(state, payload) {
      state.usersCount = payload
    },
    changeUsersList(state, payload) {
      state.usersList = payload
    },
    changeRoleList(state, payload) {
      state.roleList = payload
    },
    changeRoleCount(state, payload) {
      state.roleCount = payload
    }
  },
  actions: {
    async getPageListAction({ commit }, payload) {
      const { pageName } = payload
      const pageUrl = `/${pageName}/list`
      const commitCountName = `change${pageName.slice(0, 1).toUpperCase() + pageName.slice(1)}Count`
      const commitListName = `change${pageName.slice(0, 1).toUpperCase() + pageName.slice(1)}List`

      const pageListResult = await getPageListData(pageUrl, payload.queryInfo)

      commit(commitCountName, pageListResult.data.totalCount)
      commit(commitListName, pageListResult.data.list)
    }
  }
}

export default systemModule
