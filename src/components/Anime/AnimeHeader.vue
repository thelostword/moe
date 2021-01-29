<template>
  <div class="header">
    <div class="header-info">
      <h2>{{ new Date().getFullYear() }}年{{ season }}月番组</h2>
      <span>（共 {{ total || 0 }} 部）</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    season: Number,
    total: Number,
  },
  setup() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 15px;
  &-info {
    display: flex;
    align-items: flex-end;
    >h2 {
      margin: 0;
      margin-right: 5px;
    }
  }
}
</style>
