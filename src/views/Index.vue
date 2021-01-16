<template>
  <Header/>
  <router-view class="views"></router-view>
  <Footer/>
</template>

<script>
import Header from '@/components/header/Index.vue';
import Footer from '@/components/footer/Index.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/views.scss";
</style>
