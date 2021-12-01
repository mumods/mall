<template>
    <div class="list">
      <div class="item" v-for="(item,index) in cart" :key="index">
        <div class="chose">
          <input type="checkbox">
        </div>
        <div class="img">
          <img :src="item.image" alt="">
        </div>
        <div class="info">
          <div class="title">{{item.title}}</div>
          <div class="tail">{{item.desc}}</div>
          <div class="price">
            <div class="tip">{{item.price}}</div>
            <div class="count">{{item.count}}</div>
          </div>
        </div>
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
      cart:''
    };
  },
  methods: {
    
  },
  created(){
    
  },
  mounted(){
    this.cart = this.$store.state.storeList
    console.log(this.cart)
  }
};
</script>

<style lang = 'scss' scoped>
  .item{
    position: relative;
    box-sizing: border-box;
    top: 40px;
    padding: 10px;
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #000; */
    .chose{
      /* background-color: #ff0000; */
      width: 5%;
    }
    .img{
      /* display: block; */
      width: 20%;
      height: 100%;
      /* background-color: #00ff00; */
      img{
        width: 80%;
        height: 100%;
        border-radius: 5px;
      }
    }
    .info{
      width: 75%;
      text-align: left;
      padding: 0 0 0 10px;
      height: 100%;
      /* background-color: #0000ff; */
      .title{
        font-size: 18px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .tail{
        padding: 10px 0;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .price{
        font-size: 14px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>