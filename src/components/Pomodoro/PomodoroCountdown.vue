<template>
        <!-- Componente de cronometragem -->
            <div class="countdown">
                <div class="pomodoro-timer">
                    <span>{{minutes | leftpad}} : {{seconds | leftpad}}</span>
                </div>
            </div>
        <!-- Fim Componente de Cronometragem -->
</template>

<script>
    import { mapGetters } from "vuex"
    
    export default {
        computed: mapGetters(["minutes", "seconds"]),
    }
</script>

<style>
    .countdown {
        background: #DDDDFF;
        font-weight: bold;
        font-size: 24px;
        border-radius: 10px;
    }
</style>