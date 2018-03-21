<template>
     <div class="taskQueue well">
            <table>
                <pomodoro-task-item v-for="(item, index) in taskQueue" 
                    :key="index" :chave="index" :item="item" :willRefresh="willRefresh"></pomodoro-task-item>
            </table>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"
    import PomodoroTaskItem from "./PomodoroTaskItem"

    const data = {
    }

    export default {
        data: () => data,
        computed: mapGetters(["taskQueue", "currentTaskIndex", "willRefresh"]),
        components: {
            PomodoroTaskItem,
        },
    }
</script>
<style scoped>
    .taskQueue {
        border: 2px #00FF00 solid;
        border-radius: 10px;
        width: 100%;
    }
    ul {
        list-style-type: none;
    }

</style>