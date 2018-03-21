<template>
    <div id="pomodoro_timer" class="container">
        <div class="row">
            <!-- Componentes de Controle -->
                <pomodoro-controller></pomodoro-controller>
            <!-- Fim componentes de controle -->
        </div>
        <div class="row">
            <div class="col-sm-6">
                <!-- Componente de identificação de estado -->
                    <pomodoro-title :isWorking="isWorking"></pomodoro-title>
                <!-- Fim Componente de identificação de estado -->
            </div>
            <div class="col-sm-6">
                <!-- Componente de cronometragem -->
                    <pomodoro-countdown></pomodoro-countdown>
                <!-- Fim Componente de Cronometragem -->
            </div>
        </div>
        <div class="row">
            <div class="col-sm-2">&nbsp;</div>
            <div class="col-sm-4">
                <div class="new-task">
                        <!-- Componente de adição de tarefa -->
                            <pomodoro-task-list></pomodoro-task-list>
                        <!-- Fim Componente de adição de tarefa -->
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="task-order">
                        <!-- Componente de fila de tarefas -->
                            <pomodoro-task-order></pomodoro-task-order>
                        <!-- Fim Componente de fila de tarefas -->
                    </div>
                </div>
            <div class="col-sm-2">&nbsp;</div>
            </div>
        </div>
    </div>
</template>

<script>

import PomodoroTaskList from "./PomodoroTaskList"
import PomodoroTaskOrder from "./PomodoroTaskOrder"
import PomodoroCountdown from "./PomodoroCountdown"
import PomodoroTitle from "./PomodoroTitle"
import PomodoroController from "./PomodoroController"

const POMODORO_STATES = {
    WORK: "Work",
    REST: "Rest",
}

const STATES = {
    STARTED: "started",
    STOPPED: "stopped",
    PAUSED: "paused",
}

const DEFAULT_WORKING_TIME_LENGTH_IN_MINUTES = 5

const pomodoroData = {
    state: STATES.STOPPED,
    minute: DEFAULT_WORKING_TIME_LENGTH_IN_MINUTES,
    second: 0,
    pomodoroState: POMODORO_STATES.WORK,
    timestamp: 0,
    workState: 0,
    isWorking: true,
    tasks: ["tarefa1", "tarefa2", "tarefa3"],
}

export default {
    name: "Pomodoro_Timer",
    data: function data() {
        return pomodoroData
    },
    components: {
        PomodoroController,
        PomodoroCountdown,
        PomodoroTaskList,
        PomodoroTaskOrder,
        PomodoroTitle,
    },
    methods: {
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button:disabled i {
    color:gray;
}

container {
    width: 75%;
}
</style>
