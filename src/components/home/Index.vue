<template>
  <section>
    home
    <button @click="clickMe">点我</button>
  </section>
</template>

<script>
// 注意这里替换成存放路径
import { getCurrentInstance } from 'vue';

export default {
  setup() {
    const { ctx } = getCurrentInstance();
    function clickMe() {
      ctx.$notify.info(null, '12222222222222221eeeeeeeeeeeeeeeeeeeee');
    }
    return {
      clickMe,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
