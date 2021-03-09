<template>
  <div class="list">
    <template v-for="(item, index) in list" :key="index">
      <AnimeItem :item="item" :siteMeta="siteMeta"/>
    </template>
  </div>
</template>

<script>
import AnimeItem from './AnimeItem.vue';

export default {
  components: {
    AnimeItem,
  },
  props: {
    list: Array,
    siteMeta: Object,
  },
};
</script>

<style lang="scss" scoped>
.list {
  flex: 1;
}
</style>
