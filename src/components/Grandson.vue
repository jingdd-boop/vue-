<template>
  <div>
    <h1>孙子组件</h1> 
   <span>爷爷给的值 {{grandCount}}</span> 
  </div>
</template>

<script>
  export default {
    inject:['father'],
    data(){
      return{
        grandCount: this.father.count
      }
    }
  }
</script>

<style  scoped>

</style>