<template>
  <nav class="main">
    <template v-for="(item, index) in mainList" :key="index">
      <a :href="item.link" target="_blank" rel="noopener noreferrer">
        <img :src="item.img" :alt="item.name">
        <span>{{ item.name }}</span>
      </a>
    </template>
  </nav>
</template>

<script>
import mainList from './config-main';

export default {
  setup() {
    return {
      mainList,
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: var(--color-white-o8);

  >a {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    >img {
      margin-bottom: 8px;
      border-radius: 5px;
      transition: all .25s;
    }

    &:hover {
      >img {
        transform: translateY(-3px);
        box-shadow: 3px 5px 10px var(--color-black-o4);
      }
    }
  }
}
</style>
