<template>
  <div class="utils">
    <ul>
      <li>1920*1080</li>
      <li>2k</li>
      <li>4k</li>
      <li>场景</li>
      <li>人物</li>
    </ul>
    <!-- <div>
      <input type="text">
      <button>搜索</button>
    </div> -->
  </div>
</template>

<script>
export default {
  setup() {
  },
};
</script>

<style lang="scss" scoped>
.utils {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 5px rgba($color: #000000, $alpha: .06);
  >ul {
    display: flex;
    align-items: center;
    >li {
      margin-right: 20px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
