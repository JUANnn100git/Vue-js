import { createStore } from 'vuex'

export default createStore({
  state: {
    tareas: [],
    tarea: {
      id: '',
      nombre: '',
      categorias: [],
      estado: '',
      numero: 0
    }
  },
  mutations: {
    set(state, payload) {
      state.tareas.push(payload)
      console.log(state.tareas)
    },
    delete(state, payload) {
      state.tareas = state.tareas.filter(item => item.id !== payload)
    }
  },
  actions: {
    setTareas({ commit }, tarea) {
      commit('set', tarea)
    },
    deleteTareas({ commit }, id) {
      commit('delete', id)
    }
  },
  modules: {
  }
})
