import Vue from 'vue'
import App from './App.vue'
import './app.sass'

new Vue({
  el: '#app',
  render (createElement) {
    return createElement(App)
  }
})
