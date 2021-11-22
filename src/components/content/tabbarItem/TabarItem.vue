<template>
  <div class="item" :style="itemcolor" @click="itemChange">
      <slot name="icon"></slot>
      <slot name='text'></slot>
  </div>
</template>
<script>
export default {
  name: 'tabarItem',
  props:{
    path: {
      type:String
    },
    color:String
    
  },
  data() {
    return {
      
    }
  },
  computed:{
    isactive(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    itemcolor(){
      return this.isactive? {color:this.color}:''
    }
  },
  methods:{
    itemChange(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped lang="scss">
  .item {
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .active{
      color: pink;
    }
    .iconfont{
      font-size: 25px;
    }
    div{
      font-size: 13px;
    }
  }
</style>
