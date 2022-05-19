<template>
    <div class="box has-text-weight-bold has-background-warning-light">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    export default defineComponent({
        name: 'Box',
    })
</script>

<style scoped>
</style>