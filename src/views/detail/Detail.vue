<template>
  <div class="detail">
      <DetailNavbar/>
      <DetailBanner :banner = banner />
  </div>
</template>

<script>
import DetailNavbar from './compoents/DetailNavbar'
import DetailBanner from './compoents/DetailBanner'
import {detail} from 'network/detail'
export default {
    name:'Detail',
    components:{
        DetailNavbar,
        DetailBanner
    },
    data(){
        return {
            iid:'',
            banner:[]
        }
    },
    methods:{
        getDetail(){
            detail(this.iid).then(res=>{
                console.log(res)
            //获取banner
            this.banner = res.result.itemInfo.topImages
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