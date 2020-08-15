<template>
  <div>
    <h3>当前最新的count值为{{$store.state.count}}</h3>
    <button @click="handle1">+1</button>
  </div>
</template>

<script>

  export default {
    data() {
      return {
       
      }
    },
    methods: {
      handle1(){
        //触发 mutations的第一种方式
        this.$store.commit('addN',3)
      }
    }

   
  }
</script>

<style scoped>

</style>

