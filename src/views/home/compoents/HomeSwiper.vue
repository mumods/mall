<template>
      <Swiper>
      <SwiperItem v-for="(item,index) in banner" :key="index">
        <a href="item.link">
          <img :src="item.image" alt="">
        </a>
      </SwiperItem>
    </Swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'
import SwiperItem from 'components/common/swiper/SwiperItem'
export default {
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    banner:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{

  },
  mounted(){
    // console.log(this.banner);
  }
}
</script>

<style>

</style>