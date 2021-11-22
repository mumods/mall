<template>
  <div>
      <TabBar>
      <TabBarItem path='/home' color='pink'>
        <div slot="icon" class="iconfont icon-shouye"></div>
        <div slot="text">首页</div>
      </TabBarItem>
      <TabBarItem path='/category' color='pink'>
        <div slot="icon" class="iconfont icon-fenlei"></div>
        <div slot="text">分类</div>
      </TabBarItem>
      <TabBarItem path='/cart' color='pink'>
        <div slot="icon" class="iconfont icon-gouwuche"></div>
        <div slot="text">购物车</div>
      </TabBarItem>
      <TabBarItem path='/profile' color='pink'>
        <div slot="icon" class="iconfont icon-icon-test"></div>
        <div slot="text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>
<script>
import TabBar from '../../common/tabbar/Tabbar'
import TabBarItem from './TabarItem'
export default {
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>