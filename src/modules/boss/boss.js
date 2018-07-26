import Vue from 'vue'
import App from './boss.vue'
import router from './router'

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router
}).$mount('#boss')
