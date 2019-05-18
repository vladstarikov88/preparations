const preparationsStore = {
  namespaced: true,
  state: {
    preparationsIdToRepeat: []
  },
  mutations: {
    pushPreparation(state, preparationId) {
      state.preparationsIdToRepeat.push(preparationId)
    },
    removePreparaion(state, preparationId) {
      const index = state.preparationsIdToRepeat.findIndex(el => {
        return el === preparationId
      })

      state.preparationsIdToRepeat.splice(index, 1)
    }
  },
  actions: {
    pushPreparation({state, commit}, preparationId) {
      state.preparationsIdToRepeat.find(id => {
        return id == preparationId
      })
      ? null
      : commit('pushPreparation', preparationId)
    },
    removePreparaion({state, commit}, preparationId) {
      commit('removePreparaion', preparationId)
    }
  },
  getters: {
    preparationsIdToRepeat(state) {
      return state.preparationsIdToRepeat
    }
  }
};

export default preparationsStore
