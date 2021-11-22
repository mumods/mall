<template>
  <div class="goodsItem">
     <a :href="goods.link">
       <img :src="goods.show.img" alt="">
     </a>
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
  mounted(){
    
  }
}
</script>

<style lang = 'scss'>
  .goodsItem{

  }
</style>