<template>
    <div class="modal" :class="{ 'is-active' : mostrar }" v-if="mostrar">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <slot name="cabecalho" />
            </header>
            <section class="modal-card-body">
                <slot name="corpo" />
            </section>
            <footer class="modal-card-foot">
                <slot name="rodape" />
            </footer>
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from 'vue';
import Formulario from '../components/Formulario.vue';
import Tarefa from '../components/Tarefa.vue';
import Box from '../components/Box.vue';
import { useStore } from '@/store';
import { ALTERAR_TAREFA, CADASTRAR_TAREFA, OBTER_PROJETOS, OBTER_TAREFAS } from '@/store/tipo-acoes';
import ITarefa from '@/interfaces/ITarefa';

export default defineComponent({
    name: "Modal",
    props: {
        mostrar: {
            type: Boolean,
            required: true
        }
    },

})
</script>