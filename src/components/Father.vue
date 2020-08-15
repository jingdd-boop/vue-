<template>
  <div class="father">
   <h1>父亲组件</h1>
   <children :countChildren="count" @sayLove="getLove"></children>
   <brother></brother>
  </div>
</template>

<script>
import Children from '@/components/Children.vue'
import Brother from '@/components/Brother.vue'

  export default {
    provide(){
      return{
        father:this //给后代接受
      }
    },
    data() {
      return {
        count: 1,
        myLove:''
      }
    },
    components:{
      Children,
      Brother
    },
    methods:{
      getLove(e){
        console.log(e)
        this.myLove = this.getLove
      }
    }
  }
</script>

<style  scoped>
  .father{
    background-color: aquamarine;
  }
</style>