<template>
  <Navbar>
    <img @click="back" slot="left" src="~assets/img/common/back.svg" alt="" />
    <div
    style="font-size:13px"
      slot="center"
      @click="itemChange(index)"
      :class="[item,{active: index === currentIndex }]"
      v-for="(item, index) in nav"
      :key="index"
    >
      {{ item.title }}
    </div>
    <div slot="right">
      <img src="" alt="" />
    </div>
  </Navbar>
</template>

<script>
import Navbar from "components/common/navbar/Navigation";
export default {
  components: {
    Navbar
  },
  data() {
    return {
      nav: [
        {
          title: "商品",
          url: "",
        },
        {
          title: "参数",
          url: "",
        },
        {
          title: "评论",
          url: "",
        },
        {
          title: "推荐",
          url: "",
        }
      ],
      currentIndex: 0,
    };
  },
  methods: {
    itemChange(index) {
      this.currentIndex = index;
    },
    back() {
      this.$router.back();
    },
  },
};
</script>

<style lang = 'scss' scoped>
.navigation{
    position: fixed;
    background-color: #fff;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
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
    
  }
  .item{
        padding: 0 15px;
        color: #000;
        font-size: 12px;
    }
</style>