import Vue from "vue"
import Router from "vue-router"
import PomodoroTimer from "@/components/Pomodoro/PomodoroTimer"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "PomodoroTimer",
            component: PomodoroTimer,
        },
    ],
})
