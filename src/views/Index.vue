<template>
  <Header/>
  <BackgroundImg/>
  <router-view class="views"></router-view>
  <Footer/>
</template>

<script>
import Header from '@/components/header/Index.vue';
import Footer from '@/components/footer/Index.vue';
import BackgroundImg from '@/components/BackgroundImg.vue';

export default {
  components: {
    Header,
    Footer,
    BackgroundImg,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/views.scss";
</style>
