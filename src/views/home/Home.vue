<template>
  <div class="home">
    <Navigation class="nav">
      <div slot='center'>购物街</div>
    </Navigation>
    <HomeSwiper class="banner" :banner = 'banner'/>
    <Recommend :recommend = 'recommend'/>
    <Feature/>
    <TabControl/>
  </div>
</template>

<script>
import Navigation from 'components/common/navbar/Navigation'
import {multidata} from 'network/home'
import HomeSwiper from './compoents/HomeSwiper'
import Recommend from './compoents/Recommend'
import Feature from './compoents/Feature'
import TabControl from 'components/content/tabControl/TabControl'
// import axios from 'axios'
export default {
  name: 'Home',
  components: {
    Navigation,
    HomeSwiper,
    Recommend,
    Feature,
    TabControl
  },
  data(){
    return{
      banner:[],
      recommend:[]
    }
  },
  methods:{
    // get(){
    //   axios({
    //     url:'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //     method:'get',
    //     params:{
    //     }
    //   }).then(res =>{
    //     console.log(res)
    //   })
    // }
    request(){
      multidata().then(res =>{
      console.log(res)
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
      // localStorage.setItem('banner',this.banner[0].goods_id)
    })
    }
  },
  created() {
    this.request()
  },
  mounted() {
    // this.get()
  }
}
</script>
script
<style lang = "scss">
.home{
  margin-top: 40px;
  
}
  .nav{
    background-color: pink;
    color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
  }
</style>
