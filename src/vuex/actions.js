import * as types from "./mutation_types"

export default {
    start: ({ commit }) => {
        commit(types.START)
    },
    pause: ({ commit }) => {
        commit(types.PAUSE)
    },
    stop: ({ commit }) => {
        commit(types.STOP)
    },
    queue: ({ commit }, data) => {
        commit(types.QUEUE_TASK, data)
    },
    add: ({ commit }, data) => {
        commit(types.ADD_ITEM, data)
    },
    remove_item: ({ commit }, data) => {
        commit(types.REMOVE_ITEM, data)
    },
    remove_task: ({ commit }, data) => {
        commit(types.REMOVE_TASK, data)
    },
    task_up: ({ commit }, data) => {
        commit(types.ADVANCE_TASK, data)
    },
    task_down: ({ commit }, data) => {
        commit(types.DELAY_TASK, data)
    },
    copy: ({ commit }, data) => {
        commit(types.COPY_TASK, data)
    },
    updateDuration: ({ commit }, data) => {
        commit(types.UPDATE_DURATION, data)
    },
    updateResting: ({ commit }, data) => {
        commit(types.UPDATE_RESTING, data)
    },
}
