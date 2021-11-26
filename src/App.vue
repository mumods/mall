<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
      </keep-alive>
    <mainTabbar/>
  </div>
</template>
<script>
  import MainTabbar from 'components/content/tabbarItem/MainTabbar'
  export default {
  components:{
    MainTabbar
  }
}
</script>
<style lang="scss">
@import 'assets/css/base.css';
@import '//at.alicdn.com/t/font_2705521_9hirrvxz9z5.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
