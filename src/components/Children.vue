<template>
  <div class="children">
    <h1>孩子组件</h1>
    <span>父亲组件传过来的值 {{countChildren}}</span>
    <button @click="sayLove">表达爱意</button>
    <grandson></grandson>
  </div>
</template>

<script>
import Grandson from '@/components/Grandson'
  export default {
    props:['countChildren'],
     methods:{
    sayLove(){
      this.$emit('sayLove','520 father')
      this.$bus.$emit('sayLoveBro','520 brother')
    }
  },
  components:{
    Grandson
  }
  }
 
</script>

<style scoped>
  .children{
    background-color: lightblue;
  }
</style>