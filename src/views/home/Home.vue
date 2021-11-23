<template>
  <div class="home">
    <BackTop />
    <Navigation class="nav">
      <div slot='center'>购物街</div>
    </Navigation>
    <HomeSwiper class="banner" :banner = 'banner'/>
    <Recommend :recommend = 'recommend'/>
    <Feature/>
    <TabControl :title = "['流行','新款','精选']" @changeClick='itemChange'/>
    <GoodsList :goodslist = 'goods[currentType].list'/>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import {multidata,homeGoods} from 'network/home'
import Navigation from 'components/common/navbar/Navigation'
import HomeSwiper from './compoents/HomeSwiper'
import Recommend from './compoents/Recommend'
import Feature from './compoents/Feature'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop.vue'
// import axios from 'axios'
export default {
  name: 'Home',
  components: {
    Navigation,
    HomeSwiper,
    Recommend,
    Feature,
    TabControl,
    GoodsList,
    BackTop
  },
  data(){
    return{
      banner:[],
      recommend:[],
      goods:{
        pop: {page: 0, list: []},
        new: {page: 0, list: []},
        sell: {page: 0, list: []}
      },
      currentType:'pop',
      scroll:''
    }
  },
  methods:{
    // get(){
    //   axios({
    //     url:'http://152.136.185.210:7878/api/hy66/home/multidata',
    //     method:'get',
    //     params:{
    //     }
    //   }).then(res =>{
    //     console.log(res)
    //   })
    // },
    handleScroll(){
      let banner = document.querySelector('.banner')
      console.log(banner.clientTop)
    },
    itemChange(index){
      switch (index){
        case 0: this.currentType = 'pop' 
        break
        case 1: this.currentType = 'new'
        break
        case 2: this.currentType = 'sell'
        break
      }
    },
    getdata(){
      multidata().then(res =>{
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
      // localStorage.setItem('banner',this.banner[0].goods_id)
      })
    },
    
    //请求商品数据
    getgoods(type){
      let page = this.goods[type].page+1
      homeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page++
      })
    }
  },
  created() {
    this.getdata()

    this.getgoods('pop')

    this.getgoods('new')
    
    this.getgoods('sell')
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
