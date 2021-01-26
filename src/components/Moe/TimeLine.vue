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
        target="_blank"
        rel="noopener noreferrer"
      >bilibili</a>
    </div>

    <template v-if="timelineData && timelineData.length">
      <TimeLineFlag v-if="flagIndex === null"/>
      <template v-for="(item, index) in timelineData" :key="index">
        <TimeLineItem :item="item"/>
        <TimeLineFlag v-if="index === flagIndex"/>
      </template>
    </template>
    <div v-else class="timeline-empty"></div>
  </div>
</template>

<script>
import {
  getCurrentInstance,
  reactive, toRefs, watch,
} from 'vue';
import { setSession, getSession } from '@/utils/storage';
import TimeLineItem from './TimeLineItem.vue';
import TimeLineFlag from './TimeLineFlag.vue';

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
    TimeLineFlag,
  },
  setup() {
    const { ctx } = getCurrentInstance();

    const state = reactive({
      currentType: enumType[0].type,
      timelineData: getSession('timeline_global'),
      flagIndex: null,
    });

    // 切换类型
    function checkType(type) {
      state.currentType = type;
    }

    // 计算当前时间标记出现位置
    function getFlagIndex() {
      const publishedArr = state.timelineData.filter((item) => {
        const timeNumber = +item.pub_time.replace(':', '');
        const date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        if (hour < 10) {
          hour = `0${hour}`;
        }
        if (minute < 10) {
          minute = `0${minute}`;
        }
        const curTimeNumber = +`${hour}${minute}`;
        return timeNumber <= curTimeNumber;
      });
      if (publishedArr.length) {
        state.flagIndex = publishedArr.length - 1;
      } else {
        state.flagIndex = null;
      }
    }

    // 获取哔哩哔哩时间表
    async function getTimeLine() {
      const res = await ctx.$axios.get(`/bili/timeline_${state.currentType}`);
      if (res.code !== 0) {
        ctx.$notify.error(null, res.message);
        return;
      }
      state.timelineData = res.result[6].seasons;
      setSession(`timeline_${state.currentType}`, res.result[6].seasons);
      getFlagIndex();
    }
    // 判断session 是否有数据，有则不发请求
    if (state.timelineData) {
      getFlagIndex();
    } else {
      getTimeLine();
    }

    // 监听类型切换（国创/番剧）
    watch(
      () => state.currentType,
      (type) => {
        const timelineData = getSession(`timeline_${type}`);
        if (timelineData) {
          state.timelineData = timelineData;
          getFlagIndex();
        } else {
          getTimeLine();
        }
      },
    );

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
  margin-right: 40px;
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

  &-empty {
    width: 244px;
    height: 449px;
    margin-top: 20px;
    background-image: url('../../assets/image/empty-timeline.png');
    background-repeat: no-repeat;
  }
}
</style>
