import * as types from "./mutation_types"
import { WORKING_TIME } from "../config"

function togglePomodoro(state) {
    state.isWorking = !state.isWorking
    if (state.isWorking) {
        state.theAudio.src = state.workSound
        state.theAudio.loop = false
        state.theAudio.play()
    } else {
        state.theAudio.src = state.restSound
        state.theAudio.play()
        state.theAudio.loop = false
    }
}

function tick(state) {
    if (state.counter === 0) {
        togglePomodoro(state)
        if (state.isWorking) {
            state.currentTaskIndex = (state.currentTaskIndex + 1) % state.taskQueue.length
            state.currentTask = state.tasksList[state.taskQueue[state.currentTaskIndex]].name
            state.counter = state.tasksList[state.taskQueue[state.currentTaskIndex]].seconds
            state.theAudio.src = state.workSound
            state.theAudio.loop = false
            state.theAudio.play()
        } else {
            state.counter = state.restingTime
        }
    }
    state.counter -= 1
}

export default {
    [types.START](state) {
        state.started = true
        state.paused = false
        state.stopped = false
        if (state.currentTaskIndex < 0) {
            state.currentTaskIndex = 0
            state.currentTask = state.tasksList[state.taskQueue[state.currentTaskIndex]].name
            state.counter = state.tasksList[state.taskQueue[state.currentTaskIndex]].seconds
        }
        state.interval = setInterval(() => tick(state), 1000)
        state.theAudio.play()
    },
    [types.PAUSE](state) {
        state.started = true
        state.paused = !state.paused
        state.stopped = false
        clearInterval(state.interval)
        if (!state.paused) {
            state.interval = setInterval(() => tick(state), 1000)
        }
    },
    [types.STOP](state) {
        state.started = false
        state.paused = false
        state.stopped = true
        state.currentTaskIndex = -1
        state.counter = WORKING_TIME
        state.isWorking = true
        clearInterval(state.interval)
    },
    [types.ADD_ITEM](state, item) {
        state.tasksList.push(item)
    },
    [types.QUEUE_TASK](state, pos) {
        state.taskQueue.push(pos)
    },
    [types.REMOVE_ITEM](state, pos) {
        let idx = 0
        const toCat = []
        state.tasksList.forEach((elt) => {
            if (idx !== pos) {
                toCat.push(elt)
            }
            idx += 1
        })
        // devemos remover todos da taskQueue
        // tomando cuidado com o elemento corrente

        state.tasksList = toCat
    },
    [types.REMOVE_TASK](state, pos) {
        let idx = 0
        const toCat = []
        state.taskQueue.forEach((element) => {
            if (idx !== pos) {
                toCat.push(element)
            }
            idx += 1
        })
        state.taskQueue = toCat
        if (pos < state.currentTaskIndex) {
            state.currentTaskIndex -= 1
        }
        // Se não houver mais nada na fila, não há mais nada a temporizar
        if (state.taskQueue.length === 0) {
            state.started = false
            state.paused = false
            state.stopped = true
            state.currentTaskIndex = -1
            state.counter = WORKING_TIME
            state.isWorking = true
            clearInterval(state.interval)
        }
    },
    [types.ADVANCE_TASK](state, pos) {
        if (pos > 0) {
            const dt = state.taskQueue[pos - 1]
            state.taskQueue[pos - 1] = state.taskQueue[pos]
            state.taskQueue[pos] = dt
            if ((pos - 1) === state.currentTaskIndex) {
                state.currentTaskIndex += 1
            }
            state.willRefresh = (state.willRefresh + 1) % 2
        }
    },
    [types.DELAY_TASK](state, pos) {
        if (pos < state.taskQueue.length - 1) {
            const dt = state.taskQueue[pos + 1]
            state.taskQueue[pos + 1] = state.taskQueue[pos]
            state.taskQueue[pos] = dt
            if ((pos + 1) === state.currentTaskIndex) {
                state.currentTaskIndex -= 1
            }
            state.willRefresh = (state.willRefresh + 1) % 2
        }
    },
    [types.COPY_TASK](state, pos) {
        let idx = 0
        const toCat = []
        // let removed = ""
        while (idx < pos) {
            toCat.push(state.taskQueue.shift())
            idx += 1
        }
        const elt = state.taskQueue.shift()
        toCat.push(elt)
        toCat.push(elt)
        // removed = this.items.shift()
        state.taskQueue = toCat.concat(state.taskQueue)
        if (pos < state.currentTaskIndex) {
            state.currentTaskIndex += 1
        }
    },
    [types.NEXT_TASK](state) {
        state.currentTaskIndex += 1
        state.currentTask = state.taskQueue[state.currentTaskIndex]
    },
    [types.UPDATE_DURATION](state, data) {
        state.tasksList[data.pos].seconds = data.duration
    },
    [types.UPDATE_RESTING](state, data) {
        state.restingTime = data
    },
}
