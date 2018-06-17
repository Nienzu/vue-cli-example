#  Sigle Page Application on GitHub Pages

## 筆記

使用 github pages 的服務一般來說比較常見的做法是每個頁面一個 html 檔案，不過如果是透過 vue-cli 產生的 dist 則是只會有一個 index.html ，但實際上 gh-pages 的 URL 是指向實際的檔案，因此透過 vue-router 來解析到其他虛擬頁面的時候就會產生 404 錯誤，所以就需要自行建立一個 404.html 來重新導引並解析。

### TODO 解釋重新解析的原理

P.S. 目前這個範例只能在有用 DNS 指 CNAME 的情況下，如果是前綴為 xxx.github.io 的是無法運作的