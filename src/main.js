// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

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

var MRTMarker={
  '機場第二航廈站':[25.07707,121.2296963],
  '坑口站':[25.086516,121.2642601],
  '山鼻站':[25.0807591,121.2826402],
  '林口站':[25.0629746,121.3617623],
  'A8長庚醫院站':[25.0604431,121.3686624],
  '體育大學站':[25.041246,121.3832453],
  'A6 泰山貴和站':[25.0334752,121.4201443],
  '新莊副都心站':[25.0592855,121.4436477],
  'A3 新北產業園區站':[25.0617119,121.4567051],
  '三重站':[25.0547782,121.4806625],
  '台北車站':[25.0482366,121.5145408],
  '北門站':[25.0389779,121.5082196],
  '西門站':[25.0389779,121.5082196],
  '小南門':[25.0389779,121.5082196],
  '中正紀念堂站':[25.0372896,121.5120444],
  '古亭站':[25.0309509,121.5197269],
  '捷運台電大樓站':[25.0214985,121.5282962],
  '捷運公館站':[25.0164338,121.5350695],
  '臺灣科技大學':[25.0138, 121.5413]
}

for (var item in MRTMarker){

  L.marker(MRTMarker[item]).addTo(map)
  .bindPopup(item)
}
  