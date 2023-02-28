<template>
    <section>
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomeDoProjeto" class="label">Nome do projeto</label>
                <input
                    type="text"
                    class="input"
                    v-model="nomeDoProjeto"
                    id="nomeDoProjeto"
                />
            </div>

            <div class="field">
                <button type="submit" class="button">Salvar</button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import { TipoNotificacao } from '@/interfaces/INotificacao'
import { useStore } from '@/store'
import { ADICIONA_PROJETO, ALTERA_PROJETO } from '@/store/tipos-mutacoes'
import { defineComponent } from 'vue'
import useNotificador from '@/hooks/notificador'
import { ALTERAR_PROJETO, CADASTRAR_PROJETO } from '@/store/tipo-acoes'

export default defineComponent({
    name: "Formulario",
    props: {
        id: String
    },
    mounted () {
        if (this.id) {
            const projeto = this.store.state.projetos.find(proj => proj.id == this.id)
            this.nomeDoProjeto = projeto?.nome || ''
        }
    },
    data() {
        return {
            nomeDoProjeto: ''
        }
    },
    methods: {
        salvar() {
            if (this.id) {
                this.store.dispatch(ALTERAR_PROJETO, {
                    id: this.id,
                    nome: this.nomeDoProjeto
                }).then(() => this.lidarComSucesso())
            } else {
                this.store.dispatch(CADASTRAR_PROJETO, this.nomeDoProjeto).then(() => this.lidarComSucesso())
            }
        },
        lidarComSucesso() {
            this.nomeDoProjeto = ''
            this.notificar(TipoNotificacao.SUCESSO, 'Novo projeto foi salvo', 'Protinho ;) seu projeto já esta disponível')
            this.$router.push('/projetos')
        }
    },
    setup () {
        const store = useStore()
        const {notificar} = useNotificador()
        return {
            store,
            notificar
        }
    }
})
</script>