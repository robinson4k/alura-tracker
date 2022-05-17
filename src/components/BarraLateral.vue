<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="">
        </h1>
    </header>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    export default defineComponent({
        name: 'BarraLateral',
    })
</script>

<style scoped>
    header {
        padding: 1rem;
        width: 100%;
        height: 100vh;
        background: #0d3d66;
    }
    @media only screen and (max-width: 768px) {
        header {
            padding: 2.5rem;
            height: auto;
        }
    }
</style>