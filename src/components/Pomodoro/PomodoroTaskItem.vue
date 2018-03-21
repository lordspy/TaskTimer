<template>
    <tr> 
        <td class="checkbox"> 
            <label :class="{item:tasklist, task:!tasklist}"> 
                    {{ tasksList[item].name }}
            </label> 
        </td>
        <td>
            <input v-if="tasklist" class="seconds" type="number" v-model="tasksList[item].seconds" :disabled="!(tasklist && chave!== taskQueue[currentTaskIndex]) && isWorking"
            placeholder="tasksList[item].seconds" v-on:keyup.enter="updateDuration({ pos: item, duration: tasksList[item].seconds})"/>
        </td>
        <td>
                    <button v-if="tasklist" @click="queue(chave)"><i class="glyphicon glyphicon-forward"></i></button>
                    <button v-if="chave!==currentTaskIndex && !tasklist" @click="task_up(chave)"><i class="glyphicon glyphicon-chevron-up"></i></button>
                    <button v-if="chave!==currentTaskIndex && !tasklist" @click="task_down(chave)"><i class="glyphicon glyphicon-chevron-down"></i></button>
                    <button @click="copy(chave)" v-if="!tasklist"><i class="glyphicon glyphicon-copy"></i></button>
                    <button @click="remove_task(chave)" v-if="!tasklist" :disabled="!(!tasklist && chave!==currentTaskIndex)"><i class="glyphicon glyphicon-remove-sign red"></i></button>
                    <button @click="remove_item(chave)" v-if="tasklist" :disabled="!(tasklist && chave!== taskQueue[currentTaskIndex])"><i class="glyphicon glyphicon-remove-sign red"></i></button>
        </td>
        <td v-if="!tasklist" class="checkbox">
            {{tasksList[item].seconds}}
        </td>
    </tr> 
</template>

<script>
    import { mapGetters, mapActions } from "vuex"

    export default {

        props: ["item", "tasklist", "chave", "currIndex", "willRefresh"],
        methods: mapActions(["queue", "task_up", "task_down", "remove_task", "remove_item", "copy", "updateDuration"]),
        computed: mapGetters(["currentTaskIndex", "tasksList", "taskQueue", "isWorking"]),
    }
</script>

<style scoped>
    .red {
        color: red;
    }
    .task {
        color: blue;
    }
    .checkbox {
        background: #EEFFEE;
        padding: 0 20px 0 10px;
    }
    button:disabled i {
        color: white;
    }

    .seconds {
        background: #FFEEEE;
        border: 1px solid red;
        border-radius: 10px;
        padding-left: 10px;
        margin: auto;
    }
</style>