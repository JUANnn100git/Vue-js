import { createStore } from 'vuex'
import router from '../router'

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
    cargar(state, payload) {
      state.tareas = payload
    },
    set(state, payload) {
      state.tareas.push(payload)

    },
    eliminar(state, payload) {
      state.tareas = state.tareas.filter(item => item.id !== payload)

    },
    tarea(state, payload) {
      if(!state.tareas.find(item => item.id === payload)){
        router.push('/')
        return
      }
      state.tarea = state.tareas.find(item => item.id === payload)
    },
    update(state, payload) {
      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item)
      router.push('/')

    }
  },
  actions: {
    // Cargar datos desde la BD Firebase
    async cargarLocalStorage({ commit }) {
      try {
        const res = await fetch('https://udemy-api-98675-default-rtdb.firebaseio.com/tareas.json')
        const dataDB = await res.json()

        const arrayTareas = []

        for(let id in dataDB){

          arrayTareas.push(dataDB[id])
        }

        commit('cargar', arrayTareas)

      } catch (error) {
        console.log(error)
      }
    },
    // Crear una Tarea
    async setTareas({ commit }, tarea) {
      try {
        const res = await fetch(`https://udemy-api-98675-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(tarea)
        })

        const dataDB = await res.json()

        console.log(dataDB)

      } catch (error) {
        console.log(error)
      }
      
      commit('set', tarea)
    },
    // Eliminar tarea por id
    async deleteTareas({ commit }, id) {
      try {
        await fetch(`https://udemy-api-98675-default-rtdb.firebaseio.com/tareas/${id}.json`, {
          method: 'DELETE'
        })

        commit('eliminar', id)

      } catch (error) {
        console.log(error)
      }
      
    },
    // Cargar datos de 1 tarea por id para la vista editar
    setTarea({ commit }, id) {
      commit('tarea', id)
    },
    // Actualizar una tarea por id
    async updateTarea({ commit }, tarea) {
      try {
        const res =  await fetch(`https://udemy-api-98675-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`, {
          method: 'PATCH',
          body: JSON.stringify(tarea)
        })

        const dataDB = await res.json()

        commit('update', dataDB)

      } catch (error) {
        console.log(error)
      }
      
    }
  },
  modules: {
  }
})
