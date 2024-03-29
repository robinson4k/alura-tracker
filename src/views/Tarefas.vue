<template>
    <Formulario @aoSalvarTarefa="salvarTarefa" />
    <div class="lista px-4">
        <Box v-if="listaEstaVazia">
            Nenhum registro encontrado :(
        </Box>

        <div class="field">
            <p class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Digite para filtrar" v-model="filtro">
                <span class="icon is-small is-left">
                    <i class="fas fa-search"></i>
                </span>
            </p>
        </div>

        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" @aoTarefaClicada="selecionarTarefa" />

        <Modal :mostrar="tarefaSelecionada != null">
            <template name="cabecalho">
                <p class="modal-card-title">Editando uma tarefa</p>
                <button class="delete" aria-label="close" @click="fecharModal"></button>
            </template>
            <template name="corpo">
                <div class="field">
                    <label for="descricaoDaTarefa" class="label">Descrição</label>
                    <input
                        type="text"
                        class="input"
                        v-model="tarefaSelecionada.descricao"
                        id="descricaoDaTarefa"
                    />
                </div>
            </template>
            <template name="rodape">
                <button @click="alterarTarefa" class="button is-success">Salvar</button>
                <button @click="fecharModal" class="button">Cancelar</button>
            </template>
        </Modal>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from 'vue';
import Formulario from '../components/Formulario.vue';
import Tarefa from '../components/Tarefa.vue';
import Modal from '../components/Modal.vue';
import Box from '../components/Box.vue';
import { useStore } from '@/store';
import { ALTERAR_TAREFA, CADASTRAR_TAREFA, OBTER_PROJETOS, OBTER_TAREFAS } from '@/store/tipo-acoes';
import ITarefa from '@/interfaces/ITarefa';

export default defineComponent({
    name: "App",
    components: {
        Formulario,
        Tarefa,
        Modal,
        Box
    },
    data () {
        return {
            tarefaSelecionada: null as ITarefa | null,
        }
    },
    computed: {
        listaEstaVazia() : boolean {
            return this.tarefas.length === 0
        }
    },
    methods: {
        salvarTarefa(tarefa : ITarefa) : void {
            this.store.dispatch(CADASTRAR_TAREFA, tarefa)
        },
        selecionarTarefa (tarefa: ITarefa) {
            this.tarefaSelecionada = tarefa
        },
        fecharModal () {
            this.tarefaSelecionada = null
        },
        alterarTarefa () {
            this.store.dispatch(ALTERAR_TAREFA, this.tarefaSelecionada)
                .then(() => this.fecharModal())
        }
    },
    setup () {
        const store = useStore()
        store.dispatch(OBTER_TAREFAS)
        store.dispatch(OBTER_PROJETOS)

        const filtro = ref("")

        watchEffect(() => {
            store.dispatch(OBTER_TAREFAS, filtro.value)
        })

        return {
            tarefas: computed(() => store.state.tarefas),
            store,
            filtro
        }
    }
})
</script>