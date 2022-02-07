import { createApp } from 'vue'
import Main from './main.vue'
import router from './router'


const myApp = createApp(Main);

myApp.use(router).mount('#app')

/* 
import Vue from 'vue';
import Main from './main.vue'
import router from './router/index.js'

new Vue({
  router,
  render: h =>(Main),
}).$mount('#app') */