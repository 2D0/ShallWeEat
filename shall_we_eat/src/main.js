/* import Vue from 'vue'
import Main from './main.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter) */

import Vue from 'vue'
import Main from './main.vue'
import VueRouter from './router/index.js'
Vue.config.productionTip = false

new Vue({
  render: h => h(Main), //위의 컴포트 App 파일을 불러오는 것
    //render: 는 아래의 components와 같다.
    //components: {
    //'app': App
    //}
  router: VueRouter,
}).$mount('#app') //$mount 는 el: 이랑 같다. */
