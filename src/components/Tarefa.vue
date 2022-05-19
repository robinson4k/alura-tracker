<template>
  <div class="box has-text-weight-bold has-background-warning-light">
    <div class="columns">
      <div class="column is-7">
        {{ tarefa.descricao }}
      </div>
      <div class="column">
        <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from "vue";
  import ITarefa from "@/interfaces/ITarefa";
  import Cronometro from './Cronometro.vue'
  export default defineComponent({
    name: "Tarefa",
    components: {
      Cronometro
    },
    props: {
      tarefa: {
        type: Object as PropType<ITarefa>,
        required: true
      }
    }
  });
</script>

<style scoped>
</style>