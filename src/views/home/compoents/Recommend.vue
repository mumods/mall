<template>
    <div class="recommend">
      <a :href="item.link" v-for="(item,index) in recommend" :key="index">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
</template>

<script>

export default {
  components:{
   
  },
  props:{
    recommend:{
      type:Array
    }
  },
  methods:{

  },
  mounted(){
    
  }
}
</script>

<style lang = "scss">
.recommend{
  width: 100%;
  display: flex;
  padding: 15px 0 20px 0;
  border-bottom: 10px solid #f1f1f1;
  a{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img{
      width: 70px;
      height: 70px;
      padding: 0 0 7px 0;
    }
    div{
      color: #000;
      font-size: 14px;
    }
  }
}
</style>