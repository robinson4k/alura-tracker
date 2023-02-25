<template>
    <div class="notificacoes">
        <article class="message is-success">
            <div class="message-header">Atenção!</div>
            <div class="message-body">
                Aqui vai um texto 
            </div>
        </article>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    export default defineComponent({
        name: 'Notificacoes',
    })
</script>

<style scoped>
.notificacoes {
    right: 15px;
    width: 300px;
    padding: 8px;
    z-index: 105;
    position: absolute;
}
</style>