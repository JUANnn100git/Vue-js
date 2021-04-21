<template>
  <form @submit.prevent="procesarFormulario">
    <input
      type="text"
      class="form-control my-2"
      placeholder="Ingrese nombre"
      v-model.trim="tarea.nombre">

    <div class="form-check form-check-inline">
      <input
        type="checkbox"
        id="check-1"
        class="form-check-input"
        v-model="tarea.categorias"
        value="javascript"
        >
      <label class="form-check-label" for="check-1">Javascript</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        type="checkbox"
        id="check-2"
        class="form-check-input"
        v-model="tarea.categorias"
        value="node js"
        >
      <label class="form-check-label" for="check-1">Node.js</label>
    </div>   

    <div class="mt-2">
      <div class="form-check form-check-inline">
        <input
          type="radio"
          id="radio-1"
          class="form-check-input"
          v-model="tarea.estado"
          value="urgente"
          >
        <label class="form-check-label" for="radio-1">Urgente</label>
      </div> 
      <div class="form-check form-check-inline">
        <input
          type="radio"
          id="radio-2"
          class="form-check-input"
          v-model="tarea.estado"
          value="relax"
          >
        <label class="form-check-label" for="radio-e">Relax</label>
      </div>
    </div>     
    <div class="mt-2">
      <input
        type="number"
        class="form-control"
        v-model.number="tarea.numero"
      >
    </div>

    <button
      class="btn btn-dark mt-2 btn-block"
      type="submit"
      :disabled="bloquear"
    >
      Procesar
    </button>
  </form>
  <hr>
  <p>
    {{ tarea }}
  </p>
</template>

<script>

export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      tarea: {
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  },
  methods: {
    procesarFormulario(){
      console.log(this.tarea)
      if(this.tarea.nombre.trim() === ""){
        console.log('Campo vacío')
        return
      }
      console.log('Campo con datos')
      // envian los datos


      this.tarea = {
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  },
  computed: {
    bloquear(){
      return this.tarea.nombre.trim() === "" ? true : false
    }
  }
}
</script>
