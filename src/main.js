import Vue from 'vue'
import App from './App.vue' //Master view

import {store} from './stores'

new Vue({
    el: '#app',
    store: store,
    render: h => h(App)
})
