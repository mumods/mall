<template>
  <div class="detail">
      <DetailNavbar class="nav"/>
      <DetailBanner :banner = 'banner'/>
      <DetailBaseInfo :goods = 'goods'/>
      <DetailShopInfo :shop = 'shopInfo'/>
      <DetailGoodsInfo :detailInfo = 'detailInfo'/>
      <DetailParamInfo/>
  </div>
</template>

<script>
import DetailNavbar from './compoents/DetailNavbar'
import DetailBanner from './compoents/DetailBanner'
import DetailBaseInfo from './compoents/DetailBaseInfo'
import DetailShopInfo from './compoents/DetailShopInfo'
import DetailGoodsInfo from './compoents/DetailGoodsInfo'
import DetailParamInfo from './compoents/DetailParamInfo'
import {detail,goodsInfo,shopInfo} from 'network/detail'
export default {
    name:'Detail',
    components:{
        DetailNavbar,
        DetailBanner,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo
    },
    data(){
        return {
            iid:'',
            banner:[],
            goods:{},
            shopInfo:{},
            detailInfo:{}
        }
    },
    methods:{
        getDetail(){
            detail(this.iid).then(res=>{
                console.log(res)
                let data = res.result
            //获取banner
            this.banner = data.itemInfo.topImages

            //获取详情数据
            this.goods = new goodsInfo(data.itemInfo,data.columns,data.shopInfo.services)

            //商店信息
            this.shopInfo = new shopInfo(data.shopInfo)

            //详情信息
            this.detailInfo = data.detailInfo
        })
        }
    },
    mounted(){
        this.getDetail()
    },
    created(){
        this.iid = this.$route.params.iid
    }
}
</script>

<style lang = 'scss'>
.nav{
    position: fixed;
    background-color: #fff;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
  }
.detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
}
    .active{
        color: pink;
    }
    .left{
        img{
            width: 20px;
            text-align: center;
            height: 40px;
            line-height: 40px;
        }
    }
    .center{
        padding: 0 15px;
    }
</style>