<template>
  <div>
    <h1>兄弟组件</h1>
  </div>
</template>

<script>
  export default {
    created(){
      this.$bus.$on('sayLoveBro',this.getLove)
    },
    methods:{
      getLove(e){
        console.log('兄弟组件',e)
      }
    }
  }
</script>

<style scoped>

</style>