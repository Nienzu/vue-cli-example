<template>
    <div>
        <vue-markdown>
# This is h1 title

## This is h2 title

City

* Paris
* London
* Newyork

Web

* CSS
    *  Sass
* Javascript
    * Vue
* html
        </vue-markdown>
    </div>    
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default{
    name:'markdown',
    components:{
        VueMarkdown
    }
}
</script>

<style scoped>

</style>
