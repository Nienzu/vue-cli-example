<template>
    <div>
        <vue-markdown>
# This is h1 title

## This is h2 title

List 

* Paris
* London
* NewYork
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
