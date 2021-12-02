<template>
  <div class="detail">
      <DetailNavbar/>
      <DetailBanner :banner = 'banner'/>
      <DetailBaseInfo :goods = 'goods'/>
      <DetailShopInfo :shop = 'shopInfo'/>
      <DetailGoodsInfo :detailInfo = 'detailInfo'/>
      <DetailParamInfo/>
      <DetailBottom @addcart = 'addcart'/>
  </div>
</template>

<script>
import DetailNavbar from './components/DetailNavbar'
import DetailBanner from './components/DetailBanner'
import DetailBaseInfo from './components/DetailBaseInfo'
import DetailShopInfo from './components/DetailShopInfo'
import DetailGoodsInfo from './components/DetailGoodsInfo'
import DetailParamInfo from './components/DetailParamInfo'
import DetailBottom from './components/DetailBottom'
import {detail,goodsInfo,shopInfo} from 'network/detail'

export default {
    name:'Detail',
    components:{
        DetailNavbar,
        DetailBanner,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailBottom
    },
    data(){
        return {
            iid:'',
            banner:[],
            goods:{},
            shopInfo:{},
            detailInfo:{},
            dat:''
        }
    },
    methods:{
        getDetail(){
            detail(this.iid).then(res=>{
                // console.log(res)
                let data = res.result
                this.info = res.result
            //获取banner
            this.banner = data.itemInfo.topImages

            //获取详情数据
            this.goods = new goodsInfo(data.itemInfo,data.columns,data.shopInfo.services)

            //商店信息
            this.shopInfo = new shopInfo(data.shopInfo)

            //详情信息
            this.detailInfo = data.detailInfo
        })
        },
        addcart(){
            const itemInfo = {}
            itemInfo.image = this.banner[0]
            itemInfo.desc = this.info.itemInfo.desc
            itemInfo.title = this.info.skuInfo.title
            itemInfo.price = this.info.itemInfo.lowPrice
            itemInfo.iid = this.info.itemInfo.iid
            itemInfo.count = 1
            itemInfo.checked = true
            this.$store.commit('addList',itemInfo)
            // console.log(this.$store.state.storeList)
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

<style lang = 'scss' scoped>
.detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
}

</style>