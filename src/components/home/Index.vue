<template>
  <section>
    home
    <button @click="clickMe">点我</button>
    <Icon icon="success" size="30" color="#000"/>
  </section>
</template>

<script>
import { getCurrentInstance } from 'vue';
import Icon from '@/components/Losting/Icon.vue';

export default {
  components: {
    Icon,
  },
  setup() {
    const { ctx } = getCurrentInstance();
    function clickMe() {
      ctx.$notify.wraning(null, '修改成功');
    }
    return {
      clickMe,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
