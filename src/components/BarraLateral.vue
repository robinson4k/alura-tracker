<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="">
        </h1>
        <button class="button" @click="alterarTema">
            {{ textoBotao }}
        </button>

        <nav class="panel mt-5">
            <ul>
                <li class="has-text-left">
                    <router-link class="link has-text-white" to="/">
                        <i class="fas fa-tasks"></i>
                        Tarefas
                    </router-link>
                </li>
                <li class="has-text-left">
                    <router-link class="link has-text-white" to="/projetos">
                        <i class="fas fa-project-diagram"></i>
                        Projetos
                    </router-link>
                </li>
            </ul>
        </nav>
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