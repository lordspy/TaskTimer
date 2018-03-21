import Vue from "vue"
import Vuex from "vuex"
import getters from "./getters"
import actions from "./actions"
import mutations from "./mutations"
import { WORKING_TIME, RESTING_TIME } from "../config"

Vue.use(Vuex)
const workSound = require("../assets/work.wav")
const restSound = require("../assets/rest.wav")

const theAudio = new Audio(workSound)

const state = {
    tasksList: [],
    taskQueue: [],
    currentTask: "",
    started: false,
    stopped: false,
    paused: false,
    currentTaskIndex: -1,
    willRefresh: 0,
    isWorking: true,
    counter: WORKING_TIME,
    interval: null,
    standardWorkingTime: WORKING_TIME,
    restingTime: RESTING_TIME,
    theAudio,
    workSound,
    restSound,
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
})

/*
const workState = 0

const state = {
    // Ciclo indica quantos ciclos de trabalho se passaram
    cycle: 0,
    // 0 = workState, 1 = restState
    timerState: workState,
    currentTask: "",
    min:0,
    sec:0,
}

const mutations = {
    toggleState: function toggleState(state) {
        state.timerState = (state.timerState + 1) % 2
        if (state.timerState === workState) {
            state.cycle += 1
        }
    },
    setCurrentTask: function setCurrentTask(state, tsk) {
        state.currentTask = tsk
    },
    reset: function reset(state, tsk) {
        // chamado quando a lista de tarefas era vazia, enquanto o timer estava executando
        // o timer não é afetado!
        state.cycle = 0
        state.currentTask = tsk
    },
}

export default new Vuex.Store({
    state,
    mutations,
})
*/
