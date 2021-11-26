<template>
  <div class="goodsItem" @click="detail">
       <img :src="goods.show.img" alt="">
     <div class="title">{{goods.title}}</div>
     <div>
       <span class="price">{{goods.price}}</span>&#8195
       <span class="iconfont icon-31shoucang">{{goods.cfav}}</span>
     </div>
  </div>
</template>
<script>
export default {
  components:{

  },
  props:{
    goods:Object
  },
  data(){
    return {
      
    }
  },
  methods:{
    detail(){
      this.$router.push('/detail/'+this.goods.iid)
      // this.$router.push({path:'/detail',query:{iid:this.goods.iid}})
    }
  },
  mounted(){
    
  }
}
</script>

<style lang = 'scss'>
  .goodsItem:nth-child(2n-1){
    background-color: #000;
    box-sizing: border-box;
    width: 50%;
    text-align: center;
    padding: 10px 0;
    /* border-bottom: 2px solid #f1f1f1; */
  }
  .goodsItem:nth-child(2n){
    background-color: #000;
    box-sizing: border-box;
    width: 50%;
    text-align: center;
    padding: 10px 0;
    /* border-bottom: 1px solid #f1f1f1; */
  }
      img{
        width: calc(375px / 2 - 15px);
        border-radius: 5px;
        margin-bottom: 5px;
      }
  .title{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
  }
  .price{
    color: pink;
    font-size: 10px;
  }
  .iconfont{
    font-size: 12px;
  }
</style>