import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:'xiaomin'
  },
  mutations: {
    setAge(state,age) {
      state.age = age
    }
  },
  actions: {
  },
  modules: {
  }
})
