<template>
  <div class="header">
    <div class="header-info">
      <h2>{{ new Date().getFullYear() }}年{{ season }}月番组</h2>
      <span>（共 {{ total || 0 }} 部）</span>
    </div>
    <input
      class="header-search"
      type="search"
      placeholder="搜索..."
      @keyup.enter="handleSearch">
  </div>
</template>

<script>
export default {
  props: {
    season: Number,
    total: Number,
  },
  setup() {
    function handleSearch(e) {
      console.log(e.target.value);
    }
    return {
      handleSearch,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  &-info {
    display: flex;
    align-items: flex-end;
    >h2 {
      margin: 0;
      margin-right: 5px;
    }
  }
  &-search {
    width: 300px;
    height: 30px;
    padding: 5px 10px;
    box-sizing: border-box;
    border: 1px solid var(--color-black-o1);
    border-radius: 15px;
    outline: none;
    transition: all .25s;
    &:focus {
      border-color: transparent;
      box-shadow: 0 0 5px var(--color-theme);
    }
  }
}
</style>
