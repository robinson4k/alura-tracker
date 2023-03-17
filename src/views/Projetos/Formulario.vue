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
import { defineComponent, ref } from 'vue'
import useNotificador from '@/hooks/notificador'
import { ALTERAR_PROJETO, CADASTRAR_PROJETO } from '@/store/tipo-acoes'
import { useRouter } from 'vue-router'

export default defineComponent({
    name: "Formulario",
    props: {
        id: String
    },
    setup (props) { // composition api
        const store = useStore()
        const router = useRouter()
        const {notificar} = useNotificador()
        const nomeDoProjeto = ref("")

        if (props.id) {
            const projeto = store.state.projeto.projetos.find(
                (proj) => proj.id == props.id
            )
            nomeDoProjeto.value = projeto?.nome || ''
        }

        const lidarComSucesso = () => {
            nomeDoProjeto.value = ''
            notificar(
                TipoNotificacao.SUCESSO,
                'Novo projeto foi salvo', 'Protinho ;) seu projeto já esta disponível'
            )
            router.push('/projetos')
        }

        const salvar = () => {
            if (props.id) {
                store.dispatch(ALTERAR_PROJETO, {
                    id: props.id,
                    nome: nomeDoProjeto.value
                }).then(() => lidarComSucesso())
            } else {
                store.dispatch(CADASTRAR_PROJETO, nomeDoProjeto.value)
                    .then(() => lidarComSucesso())
            }
        }

        return {
            nomeDoProjeto,
            salvar
        }
    }
})
</script>