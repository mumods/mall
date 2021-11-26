<template>
    <Swiper class="banner">
      <SwiperItem v-for="(item,index) in banner" :key="index">
        <a href="">
          <img :src="item" alt="">
        </a>
      </SwiperItem>
    </Swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'
import SwiperItem from 'components/common/swiper/SwiperItem'
export default {
  components: {
   Swiper,
   SwiperItem
  },
  props:{
    banner:Array
  },
  data() {
    return {
      
    };
  },
  methods: {
    
  },
  mounted(){

  }
};
</script>

<style lang = 'scss'>
.banner{
  height: 300px;
  overflow: hidden;
}
</style>