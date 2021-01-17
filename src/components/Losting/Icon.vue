<template>
  <i
    :class="`iconfont losting-${icon}`"
    :style="`font-size:${size}px;color:${color}`"
  ></i>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'home',
    },
    size: {
      type: [String, Number],
      default: 18,
    },
    color: {
      type: String,
      default: '#999999',
    },
  },
};
</script>

<style>

</style>
