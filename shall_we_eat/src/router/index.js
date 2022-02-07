


import { createWebHistory, createRouter } from "vue-router";
import Main from '.././main.vue'
import Weight from '.././weight.vue'

const routes = [{
  mode:'history',
  routes:[{
    path: '/main',
    component: Main
  },
  {
    path: '/weight',
    component: Weight
  }]
  }]
  

  const router = createRouter({
    history : createWebHistory(),
    routes
  });

  export default router



/*   import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '.././main.vue'
import Weight from '.././weight.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  mode:'history',
  routes:[{
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/weight',
    name: 'weight',
    component: Weight
  }]
  });
  

  export default router */