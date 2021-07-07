import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

//Telas
import HomeScreen from './screens/Home.vue';
import Search from './screens/Search.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes:
  [
    {
      path: '/home',
      component: HomeScreen
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path:'/filtro',
      component: Search
    }
  ]
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
