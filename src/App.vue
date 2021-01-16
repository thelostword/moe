<template>
  <View/>
</template>

<script>
import View from './views/Index.vue';

export default {
  components: {
    View,
  },
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
/* 文本单行溢出隐藏 */
@mixin single-text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/* 文本多行溢出隐藏 */
@mixin multi-text($num: 2) {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: $num;
  flex-direction: column;
}
</style>
