<template>
    <div class="bottom">
      <div class="left" style="font-size:12px">
        <div class="option">
          <div class="iconfont icon-kefu1"></div>
          <div>客服</div>
        </div>
        <div class="option">
          <div class="iconfont icon-dianpu"></div>
          <div>店铺</div>
        </div>
        <div class="option">
          <div class="iconfont icon-shoucang"></div>
          <div>收藏</div>
        </div>
      </div>
      <div class="right">
        <div class="option1" @click="add">加入购物车</div>
        <div class="option2">立即购买</div>
      </div>
    </div>
</template>

<script>
export default {
  components: {
   
  },
  props:{
      
  },
  data() {
    return {
      
    };
  },
  methods: {
    add(){
      this.$emit("addcart")
    }
  },
  mounted(){
    
  }
};
</script>

<style lang = 'scss' scoped>
.bottom{
  display: flex;
  width: 100%;
  height: 49px;
  background-color: #000;
  position: fixed;
  bottom: -3px;
  left: 0;
  .left{
    flex: 1;
    background-color: #fff;
    display: flex;
    .option{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  .right{
    flex: 1;
    width: 50%;
    display: flex;
    justify-content: center;
    .option1{
      flex: 1;
      background-color: #ffc400;
      color: #000;
      height: 49px;
      line-height: 49px;
      border: none;
    color:#fff;
    }
    .option2{
      border: none;
      flex: 1;
      color: #000;
      height: 49px;
      line-height: 49px;
      background-color: #ff5100;
    color:#fff;
    }
  }
}
</style>