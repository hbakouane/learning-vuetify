import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: localStorage.projects ?? []
  },
  mutations: {
    updateProjects(state, newProjects) {
      state.projects = newProjects
    }
  },
  actions: {
  },
  modules: {
  }
})
