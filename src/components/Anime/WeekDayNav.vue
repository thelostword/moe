<template>
  <ul>
    <li
      v-for="item in config"
      :key="item.value"
      :class="{'active': week === item.value}"
      @click="changeWeek(item.value)"
    >{{ item.text }}</li>
  </ul>
</template>

<script>
import { getCurrentInstance } from 'vue';

export default {
  props: {
    week: [Number, String],
  },
  setup(props) {
    const { ctx } = getCurrentInstance();

    const config = [
      { value: 'all', text: '全部' },
      { value: 0, text: '星期日' },
      { value: 1, text: '星期一' },
      { value: 2, text: '星期二' },
      { value: 3, text: '星期三' },
      { value: 4, text: '星期四' },
      { value: 5, text: '星期五' },
      { value: 6, text: '星期六' },
    ];

    function changeWeek(val) {
      ctx.$emit('change', val);
    }
    changeWeek(props.week);

    return {
      config,
      changeWeek,
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  width: 180px;
  padding: 10px 0;
  background-color: rgba($color: #000000, $alpha: .03);
  li {
    width: 100%;
    padding: 12px 0;
    text-align: center;
    font-weight: bold;
    transition: all .25s;
    cursor: pointer;
    &.active {
      position: relative;
      background-color: var(--color-white);
      color: var(--color-theme);
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 3px;
        height: 100%;
        background-color: var(--color-theme);
      }
    }
    &:hover {
      // background-color: var(--color-white);
      color: var(--color-theme);
    }
  }
}
</style>
