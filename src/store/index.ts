import { createStore, Store } from 'vuex'

import { IRootStateType } from './type'

import login from './login'
import system from './main/system'

const store = createStore<IRootStateType>({
  state() {
    return {
      name: 'cf'
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login,
    system
  }
})

export function initialLoginStore(store: Store<IRootStateType>) {
  store.dispatch('login/setupLoginStoreAction')
}

export default store
