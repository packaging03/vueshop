import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/scss/bootstrap.scss'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery
import 'popper.js'
import './assets/sass/index.scss'
import {fb} from './firebase'


Vue.config.productionTip = false

let app = '';

fb.auth().onAuthStateChanged(function(user) {
  if(!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
    
  } 
})