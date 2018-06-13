// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MRT_Taoyun2NTUST from '../static/geojson/MRT_Taoyun2NTUST'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// Document ready
var map = L.map('map').setView([25.0138, 121.5413], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

for (var item in MRT_Taoyun2NTUST){

  L.marker(MRT_Taoyun2NTUST[item]).addTo(map)
  .bindPopup(item)
}
  