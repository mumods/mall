<template>
  <div class="total">
    <div class="left">
      <div class="chose" @click="selectAll">
          <checked :isChecked = 'isActive'/>
          <div class="s">全选</div>
    </div>
      <div class="price">合计：111</div>
    </div>
    <div class="right">去结账</div>
  </div>
</template>

<script>
import checked from "components/common/checked/checked"
export default {
  components: {
    checked,
  },
  props: {
      
  },
  data() {
    return {
        isActive:''
    };
  },
  methods:{
      selectAll(){
          this.isActive = !this.isActive
          this.$store.commit('selectAll',this.isActive)
      }
  },
  computed:{
      isActive(){
          
      }
  },
  activated(){
      if(this.$store.state.storeList.length==0){
          this.isActive=false
      }
      else{
          this.isActive=false
      }
  },
  mounted(){
      
  }
};
</script>

<style lang = 'scss' scoped>
    .total{
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        position: fixed;
        bottom: 45px;
        .left{
            height: 100%;
            flex: 3;
            display: flex;
            align-items: center;
            background-color: #fafafa;
            .chose{
                flex: 1;
                display: flex;
                align-items: center;
            justify-content: space-around;
                .s{
                    margin-left: 10px;
                }
            }
            .price{
                flex: 4;
            }
        }
        .right{
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            flex: 1;
            background-color: #ff8800;
        }
    }
</style>