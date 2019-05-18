import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import preparationsStore from './preparations'

Vue.use(Vuex);
const store = new Vuex.Store({
  plugins: [
    createPersistedState()
  ],
  modules: {
    preparationsStore,
  }
})

export default store;
