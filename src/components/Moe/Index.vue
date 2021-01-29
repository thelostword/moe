<template>
  <div class="moe">
    <TimeLine/>
    <WebSite/>
  </div>
</template>

<script>
import TimeLine from './TimeLine.vue';
import WebSite from './WebSite.vue';

export default {
  components: {
    TimeLine,
    WebSite,
  },
};
</script>

<style lang="scss" scoped>
.moe {
  display: flex;
  padding: 10px 20px;
}
</style>
