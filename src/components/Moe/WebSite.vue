<template>
  <div class="website">
    <template v-for="(item, index) in diyWebSiteData.webSite" :key="index">
      <WebSiteList :item="item"/>
    </template>
  </div>
</template>

<script>
import diyWebSiteData from './config-website';
import WebSiteList from './WebSiteList.vue';

export default {
  components: {
    WebSiteList,
  },
  setup() {
    return {
      diyWebSiteData,
    };
  },
};
</script>

<style lang="scss" scoped>
.website {
  flex: 1;
}
</style>
