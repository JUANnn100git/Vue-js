const app = Vue.createApp({
    data() {
        return {
            titulo: 'Mi Banco con Vue.js',
            cantidad: 500,
            enlace: 'https://youtube.com/bluuweb',
            estado: false,
            servicios: ['transferencias', 'pagos', 'giros', 'cheques'],
            desactivar: false
        }
    },
    methods: {
        agregarSaldo() {
            if (this.cantidad === 0) {
                this.desactivar = false
            }
            this.cantidad = this.cantidad + 100
        },
        disminuirSaldo(valor) {
            if (this.cantidad === 0) {
                this.desactivar = true
                alert("El saldo ya llegó a 0")
                return
            }
            this.cantidad = this.cantidad - valor
        }
    },
    computed: {
        colorCantidad() {
            return this.cantidad > 500 ? 'text-success' : 'text-danger'
        },
        mayusculastexto() {
            return this.titulo.toUpperCase()
        }
    }
})