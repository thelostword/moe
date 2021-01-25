<template>
  <div class="list">
    <span>{{ item.name }}</span>
    <div class="list-item">
      <template v-for="(item, index) in item.item" :key="index">
        <WebSiteItem :item="item"/>
      </template>
    </div>
  </div>
</template>

<script>
import WebSiteItem from './WebSiteItem.vue';

export default {
  components: {
    WebSiteItem,
  },
  props: {
    item: Object,
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
  >span {
    display: inline-block;
    width: 80px;
    margin-right: 20px;
    text-align: right;
    font-weight: bold;
  }
  &-item {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
