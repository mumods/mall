<template>
  <div class="navigation">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>
<style lang="scss">
    .navigation{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 -1px 4px rgba($color: #000000, $alpha: .6);
        .left{
            width: 15%;
        }
        .center{
            width: 70%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .right{
            width: 15%;
        }
    }
</style>