<template>
  <div class="picture">
    <PictureUtilsBar
      :width="width"
      :word="word"
      @change="changeType"
    />
    <div class="picture-wrap" v-if="picData.length">
      <template v-for="(item, index) in picData" :key="index">
        <PictureItem :item="item"/>
      </template>
    </div>
    <div class="picture-empty" v-else>未找到该类型图片</div>
  </div>
</template>

<script>
import {
  getCurrentInstance,
  onActivated,
  onDeactivated,
  reactive,
  toRefs,
  watch,
} from 'vue';
import PictureUtilsBar from './PictureUtilsBar.vue';
import PictureItem from './PictureItem.vue';

export default {
  name: 'Picture',
  components: {
    PictureUtilsBar,
    PictureItem,
  },
  setup() {
    const { ctx } = getCurrentInstance();

    const state = reactive({
      picData: [],
      picColHeight: [],
      width: null,
      height: null,
      pn: 5,
      word: '美女',
      isLoading: false,
    });

    async function getPicData(sp) {
      if (state.isLoading) {
        return;
      }
      if (!sp) {
        state.pn = 5;
      }
      state.isLoading = true;
      const res = await ctx.$axios.get('/img/acjson', {
        tn: 'resultjson_com',
        logid: 10505222645674034685,
        ipn: 'rj',
        ct: '201326592',
        fp: 'result',
        queryWord: `动漫 ${state.word}`,
        word: `动漫 ${state.word}`,
        width: state.width,
        height: state.height,
        pn: state.pn,
        rn: 30,
      });
      state.isLoading = false;
      if (!res.data) {
        ctx.$notify.error(null, '百度图片获取失败！');
        return;
      }
      if (sp) {
        state.picData = state.picData.concat(res.data);
      } else {
        state.picData = res.data;
      }
    }
    getPicData(0);

    function changeType(type, data) {
      if (state.isLoading) {
        return;
      }
      if (type === 'type') {
        state.word = data.word;
      } else {
        state.width = data.width;
        state.height = data.height;
      }
    }

    watch(
      () => [state.width, state.word],
      () => {
        getPicData(0);
      },
    );

    function handleScroll() {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight === scrollHeight) {
        if (state.isLoading) {
          return;
        }
        state.pn += 30;
        getPicData(1);
      }
    }

    onActivated(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onDeactivated(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      ...toRefs(state),
      changeType,
    };
  },
};
</script>

<style lang="scss" scoped>
.picture {
  &-wrap {
    display: flex;
    flex-wrap: wrap;
    &::after {
      content: '';
      flex-grow: 999;
    }
  }
  &-empty {
    text-align: center;
    line-height: 100px;
  }
}
</style>
