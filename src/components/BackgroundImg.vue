<template>
  <div class="background" :style="`background-image:url('${url}')`"></div>
</template>

<script>
import image from '@/assets/image/bg-default.jpg';

export default {
  props: {
    url: {
      type: String,
      default: image,
    },
  },
};
</script>

<style lang="scss" scoped>
.background {
  position: absolute;
  width: 100%;
  min-width: 960px;
  height: 888px;
  background-position: center 0;
  background-repeat: no-repeat;
  background-size: cover;

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow:0 -170px 170px 35px #ffffff inset;
  }
}
</style>
