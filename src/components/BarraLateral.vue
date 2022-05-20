<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="">
        </h1>
        <button class="button" @click="alterarTema">
            {{ textoBotao }}
        </button>
    </header>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    export default defineComponent({
        name: 'BarraLateral',
        emits: ['aoTemaAlterado'],
        data() {
            return {
                modoEscuroAtivo: false
            }
        },
        computed: {
            textoBotao() : string {
                if (this.modoEscuroAtivo) {
                    return 'Desativar modo escuro'
                }
                return 'Ativar modo escuro'
            }
        },
        methods: {
            alterarTema() : void {
                this.modoEscuroAtivo = !this.modoEscuroAtivo
                this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
            }
        }
    })
</script>

<style scoped>
    header {
        padding: 1rem;
        width: 100%;
        height: 100vh;
        background: #0d3d66;
        text-align: center;
    }
    @media only screen and (max-width: 768px) {
        header {
            padding: 2.5rem;
            height: auto;
        }
    }
</style>