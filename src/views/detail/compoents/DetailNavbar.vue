<template>
  <Navbar>
    <img @click="back" slot="left" src="~assets/img/common/back.svg" alt="" />
    <div
      class="center"
      slot="center"
      @click="itemChange(index)"
      :class="[item, { active: index === currentIndex }]"
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

<style>
</style>