// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap.native"

import Vue from "vue"
import App from "./App"
import router from "./router"
import store from "./vuex/store"


Vue.config.productionTip = false
Vue.filter("leftpad", e => ((e <= 9) ? `0${e}` : e))

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    template: "<App/>",
    components: { App },
    store,
})
