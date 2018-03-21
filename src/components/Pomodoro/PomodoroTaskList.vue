<template>
        <div class="tasklist ">

            <div class="col-12 new_task">
                <pomodoro-new-task></pomodoro-new-task>
            </div>
            <div class="col-12 well tabular">
                <table>
                    <pomodoro-task-item v-for="(item, index) in tasksList" 
                        :key="index" :chave="index" :item="index" :tasklist="true">
                    </pomodoro-task-item>
                </table>
            </div>
        </div>
</template>

<script>
    import { mapGetters } from "vuex"
    import PomodoroTaskItem from "./PomodoroTaskItem"
    import PomodoroNewTask from "./PomodoroNewTask"

    const dados = {
    }

    export default {
        data: function data() {
            return dados
        },
        components: {
            PomodoroTaskItem,
            PomodoroNewTask,
        },
        computed: mapGetters(["tasksList"]),
    }
</script>

<style scoped>
    .tasklist {
        border: 1px #0000FF solid;
        border-radius: 10px;
        width: 100%;
        padding: 5px 10px 5px 10px;
    }
    ul {
        list-style-type: none;
    }

    .tabular{
        align: center;
        margin: auto;
        width: 100%;
    }
</style>