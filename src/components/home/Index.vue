<template>
  <div>
    <NavigationMain/>
    <NavigationSecond/>
    <Nav/>
    <router-view class="home-views"/>
  </div>
</template>

<script>
import NavigationMain from './Navigation/Main.vue';
import NavigationSecond from './Navigation/Second.vue';
import Nav from './Nav.vue';

export default {
  components: {
    NavigationMain,
    NavigationSecond,
    Nav,
  },
};
</script>

<style lang="scss" scoped>
.home-views {
  padding: 20px;
}
</style>
