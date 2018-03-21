<template>
    <div id="app">
        <!-- Aqui entra o componente Doorman... e o router-view vai como Slot -->
            <router-view/>
        <!-- fim do componente Doorman -->
    </div>
</template>

<script>
export default {
    name: "app",
}
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
