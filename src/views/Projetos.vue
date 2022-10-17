<template>
    <section class="projetos p-3">
        <h1 class="title">Projetos</h1>
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

        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td>{{ projeto.id }}</td>
                    <td>{{ projeto.nome }}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">
import IProjeto from '@/interfaces/IProjeto';
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name: "Projetos",
    components: {
    },
    data() {
        return {
            nomeDoProjeto: ''
        }
    },
    methods: {
        salvar() {
            this.store.commit('ADICIONA_PROJETO', this.nomeDoProjeto)
            this.nomeDoProjeto = ''
        }
    },
    setup () {
        const store = useStore()
        return {
            store,
            projetos: computed(() => store.state.projetos)
        }
    }
});
</script>

<style scoped>
.projetos {
    padding: 1.25rem;
}
</style>