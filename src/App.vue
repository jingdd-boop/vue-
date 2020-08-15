<template>
  <div id="app">
     <router-view/> 
     <div>hello</div>
     <addition></addition>
     <subtraction></subtraction>
  </div>
</template>

<script>
import Addition from '@/components/Addition'
import Subtraction from '@/components/Subtraction'

export default {
  name: 'App',
  components:{
    Addition,
    Subtraction
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
