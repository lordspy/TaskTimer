<template>
    <div class="newTask">
        <div class="row">
            <div class="col-sm-8">
                <table>
                    <tr>
                        <td>
                            <label for="tarefa" >Tarefa: </label>
                        </td>
                        <td>
                            <input name="tarefa" type="text" v-model="newTask.name" placeholder="Adicione uma nova tarefa ao contador" v-on:keyup.enter="add"/>
                        </td>
                    </tr>
                    <tr>
                        <td><label for="tempo" >Duração: </label></td>
                        <td><input name="tempo" type="number" v-model="newTask.seconds" placeholder="60" v-on:keyup.enter="add"/></td>
                    </tr>
                </table>
            </div>
            <div class="col-sm-4">
                <button title="Nova Tarefa" @click="add">
                    <i class="glyphicon glyphicon-plus"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    // import { mapActions } from "vuex"

    const dados = {
        newTask: {
            name: "",
            seconds: 60,
        },
    }
    export default {
        data: function data() {
            return dados
        },
        methods: {
            add: function add() {
                this.newTask.name = this.newTask.name.trim()
                if (this.newTask.name) {
                    if (!isNaN(this.newTask.seconds)) {
                        this.$store.commit("ADD_ITEM", this.newTask)
                        this.newTask = { name: "", seconds: this.$store.state.standardWorkingTime }
                    }
                }
            },
        },
    }
</script>

<style scoped>
    .newTask {
        background: #EEEEFF;
        border-radius: 10px;
        padding: 10px;
        margin-top: 5px;
        border: 1px solid ;
        width: 100%;
    }
</style>