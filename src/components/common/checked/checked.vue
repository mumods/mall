<template>
  <div>
      <img :class="{checked:isChecked}" src="~assets/img/cart/tick.svg" alt="" srcset="">
  </div>
</template>

<script>
export default {
    props:{
        isChecked:{
            type:Boolean,
            default:true
        }
    }
}
</script>

<style lang = 'scss' scoped>
.checked{
        background-color: pink;
        border: none;
        border: 1px solid #fff;
}
    img{
        background-color: #fff;
        border: 1px solid #dddddd;
        border-radius: 50%;
    }
</style>