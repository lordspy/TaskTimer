<template>
                <!-- Componentes de Controle -->
            <h2>
                <span>
                    Pomodoro Plus
                </span>
                <button :disabled="(isStarted && !isPaused) || !hasTasks" title="Start" @click="localStart">
                    <i class="glyphicon glyphicon-play"></i>
                </button>
                <button :disabled="!isStarted" title="Pause" @click="pause">
                    <i class="glyphicon glyphicon-pause"></i>
                </button>
                <button :disabled="!isStarted" title="Stop" @click="localStop">
                    <i class="glyphicon glyphicon-stop"></i>
                </button>
                <span>
                    Resting Period
                </span>
                <input type="number" v-model="restTime" v-on:keyup.enter="updateResting(restTime)">
            </h2>
        <!-- Fim componentes de controle -->
</template>

<script>
    import { mapGetters, mapActions } from "vuex"


    export default {
        data: function data() {
            return {
                restTime: this.$store.state.restingTime,
            }
        },
        methods: {
            ...mapActions(["start", "stop", "pause", "updateResting"]),
            localStart: function localStart() {
                this.theAudio.play()
                this.start()
            },
            localStop: function localStop() {
                // this.theAudio.stop()
                this.stop()
            },
        },
        computed:
            mapGetters(["isStarted", "isPaused", "isStopped", "hasTasks", "restingPeriod", "restingTime", "theAudio"]),
    }
</script>

<style>
    button:disabled i {
        color: white;
    }
</style>