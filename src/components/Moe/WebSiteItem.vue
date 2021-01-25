<template>
  <div class="item">
    <img :src="`//www.google.cn/s2/favicons?domain=${item.link}`">
    <a :href="item.link" target="_blank" rel="noopener noreferrer">
      {{ item.name }}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  >img {
    width: 16px;
  }
  >a {
    flex: 1;
    margin-right: 15px;
    padding: 0 5px;
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
