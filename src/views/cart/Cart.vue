<template>
  <div class="home">
    <Navbar>
      <div slot='center'>购物街({{cartCount}})</div>
    </Navbar>
    <CartList/>
  </div>
</template>
<script>
import Navbar from "components/common/navbar/Navigation"
import CartList from './components/CartList'
export default {
  name: 'Home',
  components: {
    CartList,
    Navbar
  },
  data(){
    return{

    }
  },
  computed:{
    cartCount(){
     return this.$store.state.storeList.length
    }
  }
}
</script>
<style lang="scss" scoped>
  .navigation{
    background-color: pink;
    color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
  }
</style>
