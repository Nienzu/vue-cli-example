# 紀錄學習官方文件的筆記

* 文件從基礎入門絕對是最好的，不過中間會有一些進階的概念，真的可以照官方說的先跳過再回來複習，越快把基礎看完，就能建立完整的概念，另外邊看邊配合服用 vue 實例的生命週期圖
![](img/lifecycle.png)



## 知識點
知識點會透過 [xx] 來進行分類

### [基礎] 何謂 setter & getter ？

### [基礎] template 能怎麼用？
除了當作 vue 實例內的渲染模板來使用，template 也可以當作一個包裝的 tag 來使用，不過它不會被渲染出來！
### [快速連結] v-for 條件渲染
[Link is Here!](https://cn.vuejs.org/v2/guide/list.html)
* Array 讀取範例 `(value, index) in sth `，可以只有第一個
* Object 讀取範例 `(value, key, index) in sth`，可以只有第一個
* 遍歷 object 的時候是透過 Object.keys(), 不過不保證不同的 JS 引擎結果會相同！
* v-for 優先度高於 v-if

### [效能] computed V.S methods

**重新渲染的時機點？只要在 vue instance 裡的 data 數值改變的時候就會觸發重新渲染**
* computed : 具有 cache 的特性，每次重新渲染的時候只有當相依性的變數也改變才會重新執行
* method : 不具備 method 的屬性，每次重新渲染的時候就會重新執行

### [效能] v-if & v-show 用誰好？
一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

### [資料處理] 數據更新時，都會進行重新渲染嗎？

先說答案：不會。
有一些情況要進行考慮
* Q1: 對已經存在的數據進行更新，任何資料操作都會重新渲染？
不會，這要看這項數據是什麼型別，如果是 Array、Object 就要個別探討，如果是單純的 int、float、string...etc就會
* Q2: 新增新的數據，會重新渲染嗎？
不會。
這邊有一些基礎技巧，可以參考技巧篇


## 資料操作技巧篇

* Object : 比如使用 Object.assign() 或 _.extend()。
```
[新增一個新增一個屬性]
Vue.set(vm.userProfile, 'age', 27)
vm.$set(vm.userProfile, 'age', 27)
[兩個以上]

----錯誤用法，不會觸發重新渲染----
Object.assign(vm.userProfile, {
  age: 27,
  favoriteColor: 'Vue Green'
})
----正確用法，會觸發重新渲染----
vm.userProfile = Object.assign({}, vm.userProfile, {
  age: 27,
  favoriteColor: 'Vue Green'
})

```
* Array

```
[type-1]
Vue.set(vm.items, indexOfItem, newValue)
vm.$set(vm.items, indexOfItem, newValue)
vm.items.splice(indexOfItem, 1, newValue)

[type-2]
vm.items.splice(newLength)

```