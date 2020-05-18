import Vue from 'vue'
import Vuex from 'vuex'

import layout from './modules/layout'
import company from './modules/company'
import organization_structure from './modules/organization_structure'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    layout,
    company,
    organization_structure,
  }
})
