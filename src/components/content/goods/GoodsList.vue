<template>
  <div class="goodsList">
    <GoodsItem v-for="(item,index) in goods.list" :key="index" class="item" :goods = 'item'/>
  </div>
</template>
<script>
import GoodsItem from './GoodsItem'
export default {
  components:{
    GoodsItem
  },
  props:{
    goods:{
      type:Object
    }
  },
  mounted(){
    console.log(this.goods)
  }
}
</script>

<style lang = 'scss'>
  .goodsList{
    width: 100%;
    display: flex;
    .item{
      flex: 1;
    }
  }
</style>