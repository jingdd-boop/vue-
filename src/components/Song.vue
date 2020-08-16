<template>
  <div>
    <div class="search-bar">
    <van-row>
        <van-col span="4"><img :src="locationIcon" width="100%" /></van-col>
        <van-col span="15"></van-col>
        <van-col span="5"></van-col>
    </van-row>
    </div>
    <span>Vocation</span>
    <!--swipwer area-->
   <div class="swiper-area">
    <van-swipe :autoplay="2000">
        <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
            <img v-lazy="banner.imageUrl" width="70%" class="img"/>
        </van-swipe-item>
       
    </van-swipe>
    </div>
    <div class="music">
       <audio src="/i/horse.ogg" controls="controls">
Your browser does not support the audio element.
</audio>
    </div>
   

  </div>
</template>

<script>
  export default {
    data() {
        return {
            locationIcon: require('@/assets/images/left.png'),
           
            bannerPicArray:[
                {imageUrl:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1434269025,3760592326&fm=26&gp=0.jpg'},
                {imageUrl:'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1119603505,3188737754&fm=26&gp=0.jpg'},
                {imageUrl:'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=261403436,1272960304&fm=26&gp=0.jpg'},
            ]
        }
    },
  }
</script>

<style scoped>
.search-bar{
      height: 2.2rem; 
      line-height:2.2rem;
  }
  span{
    font-family: 'Courier New', Courier, monospace;
    font-size: 2rem;
    margin-right: 11rem;
    font-weight: bold;
  }
  .swiper-area{
      width:20rem;
      clear:both;
  }
  .swiper-area .img{
    border-radius: 4rem;
     margin-left: 4rem; 
    margin-top: 2rem;
    box-shadow:  20px 20px 60px #f3f4f5, 
             -20px -20px 60px #d1fdff;
  }
  .music{
     margin-top: 2rem;
  }
</style>