<template>
{{ tareas }}
  <table class="table">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Categorias</th>
            <th scope="col">Estado</th>
            <th scope="col">Número</th>
            <th scope="col">Acción</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in tareas" :key="item.id">
            <th scope="row">{{item.id}}</th>
            <td>{{item.nombre}}</td>
            <td>{{item.categorias.join(', ')}}</td>
            <td>{{item.estado}}</td>
            <td>{{item.numero}}</td>
            <td>
                <button @click="deleteTareas(item.id)" class="btn btn-danger btn-sm">Eliminar</button>
                <button @click="deleteTareas(item.id)" class="btn btn-warning btn-sm ml-2">Editar</button>
            </td>
        </tr>
    </tbody>
</table>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    computed: {
        ...mapState(['tareas'])
    },
    methods: {
        ...mapActions(['deleteTareas'])
    }
}
</script>
