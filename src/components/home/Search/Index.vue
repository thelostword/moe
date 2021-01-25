<template>
  <div class="search">
    <ul @click="checkType">
      <template v-for="(item, index) in searchConfig" :key="index">
        <li :data-type="item.type" :class="{'active': curItem === item.type}">{{ item.name }}</li>
      </template>
    </ul>
    <template v-for="(item, index) in searchConfig" :key="index">
      <SearchItem :itemData="item.item" v-show="curItem === item.type"/>
    </template>
  </div>
</template>

<script>
import { ref } from 'vue';
import SearchItem from './SearchItem.vue';
import searchConfig from './config-search';

export default {
  components: {
    SearchItem,
  },
  setup() {
    const curItem = ref('web');

    function checkType(e) {
      if (e.target.nodeName !== 'LI') {
        return;
      }
      curItem.value = e.target.dataset.type;
    }

    return {
      curItem,
      checkType,
      searchConfig,
    };
  },
};
</script>

<style lang="scss" scoped>
.search {
  position: absolute;
  top: 250px;
  right: 0;
  z-index: 9;

  >ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 395px;
    margin-left: auto;
    margin-bottom: 10px;

    >li {
      width: 50px;
      height: 25px;
      text-align: center;
      line-height: 25px;
      background-color: var(--color-black-o4);
      color: var(--color-white);
      cursor: pointer;
      &.active {
        background-color: var(--color-white-o7);
        color: var(--color-black);
      }
    }
  }
}
</style>
