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
  components: {
    App
  },
  template: '<App/>'
})

// Document ready
$(document).ready(function () {
  var map = L.map('map').setView([25.0138, 121.5413], 10);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  var pointArray = [];
  for (var item in MRT_Taoyun2NTUST) {
    pointArray.push(MRT_Taoyun2NTUST[item])
    L.marker(MRT_Taoyun2NTUST[item]).addTo(map)
      .bindPopup(item)
  }
  var polyline = L.polyline(pointArray, {
    color: 'red'
  }).addTo(map);
  // zoom the map to the polyline
  map.fitBounds(polyline.getBounds());

  mapboxgl.accessToken = 'pk.eyJ1Ijoibmllbnp1IiwiYSI6ImNqaXExY3V5NDBxZHczcHQ5d290NzNkMXQifQ.snCsr5JB6YHCUmy-q9qBJA';
  var map = new mapboxgl.Map({
    container: 'mapid',
    style: 'mapbox://styles/mapbox/streets-v10'
  });


});
