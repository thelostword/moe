<template>
  <div>

    <NavigationMain/>
    <NavigationSecond/>
    <button @click="clickMe">点我</button>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue';
import NavigationMain from './Navigation/Main.vue';
import NavigationSecond from './Navigation/Second.vue';

export default {
  components: {
    NavigationMain,
    NavigationSecond,
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
.content {
  margin-top: 50px;
}
</style>
