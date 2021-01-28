<template>
  <div class="utils">
    <div v-for="(item, index) in utilsEnum" :key="index">
      <span>{{ item.name }}：</span>
      <ul>
        <li
          v-for="(jtem, jndex) in item.item"
          :key="jndex"
          :class="{'active'
            : (item.type === 're' && width === jtem.width)
            || (item.type === 'type' && word === jtem.word)}"
          @click="changeType(item.type, jtem)"
        >{{ jtem.text }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue';

export default {
  props: {
    width: Number,
    word: String,
  },
  setup() {
    const { ctx } = getCurrentInstance();
    const utilsEnum = [
      {
        name: '分辨率',
        type: 're',
        item: [
          {
            text: '全部',
            width: null,
            height: null,
          },
          {
            text: '1920*1080',
            width: 1920,
            height: 1080,
          },
          {
            text: '2k',
            width: 2560,
            height: 1440,
          },
        ],
      },
      {
        name: '类型',
        type: 'type',
        item: [
          {
            text: '默认',
            word: '美女',
          },
          {
            text: '人物',
            word: '人物',
          },
          {
            text: '场景',
            word: '场景',
          },
          {
            text: '壁纸',
            word: '壁纸',
          },
        ],
      },
    ];

    function changeType(type, data) {
      ctx.$emit('change', type, data);
    }
    return {
      utilsEnum,
      changeType,
    };
  },
};
</script>

<style lang="scss" scoped>
.utils {
  display: flex;
  align-items: center;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 5px rgba($color: #000000, $alpha: .06);
  >div {
    display: flex;
    align-items: center;
    margin-right: 10px;
    >ul {
      display: flex;
      align-items: center;
      >li {
        margin-right: 20px;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
        &.active {
          color: var(--color-theme);
          &:hover {
            text-decoration: none;
            cursor: default;
          }
        }
      }
    }
    >span {
      font-weight: bold;
    }
  }
}
</style>
