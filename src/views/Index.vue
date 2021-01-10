<template>
  <div class="layout">
    <Header/>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/header/Index.vue';
import Footer from '@/components/footer/Index.vue';
import Content from '@/components/content/Index.vue';

export default {
  components: {
    Header,
    Footer,
    Content,
  },
};
</script>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
