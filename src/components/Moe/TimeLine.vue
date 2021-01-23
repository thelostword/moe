<template>
  <div class="timeline">
    <div class="timeline-tab">
      <ul>
        <template v-for="(item, index) in enumType" :key="index">
          <li
            :class="{'active': currentType === item.type}"
            @click="checkType(item.type)"
          >{{ item.name }}</li>
        </template>
      </ul>
      <a
        href="//www.bilibili.com/anime/timeline"
        target="_blank" rel="noopener noreferrer"
      >bilibili</a>
    </div>
    <TimeLineItem/>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import TimeLineItem from './TimeLineItem.vue';

const enumType = [
  {
    name: '番剧',
    type: 'global',
  },
  {
    name: '国创',
    type: 'cn',
  },
];

export default {
  components: {
    TimeLineItem,
  },
  setup() {
    const state = reactive({
      currentType: enumType[0].type,
      timelineData: [],
    });

    function checkType(type) {
      state.currentType = type;
    }

    return {
      ...toRefs(state),
      enumType,
      checkType,
    };
  },
};
</script>

<style lang="scss" scoped>
.timeline {
  width: 300px;
  margin-right: 20px;
  &-tab {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    user-select: none;
    >ul {
      display: flex;
      align-items: center;
      background-color: var(--color-white);
      margin-right: 20px;
      >li {
        width: 65px;
        height: 25px;
        border-radius: 5px;
        line-height: 25px;
        text-align: center;
        font-weight: bold;
        cursor: pointer;
        &:hover {
          color: var(--color-bili-blue);
        }
        &.active {
          background-color: var(--color-theme);
          color: var(--color-white);
        }
      }
    }
    >a {
      font-size: var(--font-size-lg);
      color: var(--color-bili-blue);
      transition: all .2s;
      &:hover {
        text-shadow: 2px -4px 10px var(--color-bili-pink);
      }
    }
  }
}
</style>
