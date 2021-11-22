<template>
    <div id="nav">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>
<style scoped lang="scss">
  #nav {
    display: flex;
    height: 49px;
    justify-content: center;
    background-color: #fafafa;
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    bottom: -5px;
    box-shadow: 0 -1px 1px rgba($color: #bbb, $alpha: .2);
}
</style>
