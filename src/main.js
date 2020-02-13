import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './filter/filter'

Vue.config.productionTip = false

// Vue.filter('uppercase', function(v) {
//   return v.toUpperCase();
// })
Vue.directive("font", {
  bind: function(el, binding) {
    el.style.fontsize= binding.value + 'px'
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
