<template>
  <Header/>
  <BackgroundImg/>
  <router-view class="views"/>
  <Footer/>
</template>

<script>
import Header from '@/components/Header/Index.vue';
import Footer from '@/components/Footer/Index.vue';
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
