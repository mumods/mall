<template>
  <div class="goodsList">
    <GoodsItem v-for="(item,index) in goodslist" :key="index" class="item" :goods = 'item'/>
  </div>
</template>
<script>
import GoodsItem from './GoodsItem'
export default {
  components:{
    GoodsItem
  },
  props:{
    goodslist:{
      type:Array
    }
  },
  mounted(){
    // console.log(this.goodslist)
  }
}
</script>

<style lang = 'scss' scoped>
  .goodsList{
    .item{
      float: right;
    }
  }
</style>