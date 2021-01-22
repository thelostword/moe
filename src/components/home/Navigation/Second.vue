<template>
  <div class="second">
    <ul>
      <li v-for="(item,index) in siteData.navDiy" :key="index">
        <img :src="`//www.google.cn/s2/favicons?domain=${item.link}`">
        <a :href="`${item.link}`" target="_blank" rel="noopener noreferrer">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import siteData from './config-second';

export default {
  setup() {
    return {
      siteData,
    };
  },
};
</script>

<style lang="scss" scoped>
.second {
  padding: 0 20px;
  background-color: var(--color-white-o8);

  >ul {
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid var(--color-black-o1);
    padding-bottom: 15px;

    >li {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding-right: 10px;
      margin-top: 15px;
      width: 12%;

      >img {
        height: 16px;
        margin-right: 5px;
      }

      >a {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
