<template>
  <div class="tabContral">
      <div v-for="(item,index) in title" :key = index class="item" @click="itemChange(index)" :class="{active:index === activeIndex}">
        <span>{{item}}</span>
      </div>
  </div>
</template>
<script>
export default {
  name: 'TabControl',
  props:{
    title:Array
  },
  data() {
    return {
      activeIndex:0
    }
  },
  computed:{
    
  },
  methods:{
    itemChange(index){
      this.activeIndex = index
    }
  }
}
</script>

<style scoped lang="scss">
  .tabContral {
   display: flex;
   text-align: center;
   position: sticky;
   background-color: #fff;
   top: 39px;
   .item{
     flex: 1;
     font-size: 15px;
     height: 40px;
     line-height: 40px;
   }
  }
  .active{
    color: pink;
    span{
      border-bottom: 2px solid pink;
      padding: 5px;

    }
  }
</style>
