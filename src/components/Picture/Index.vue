<template>
  <div class="picture">
    <PictureUtilsBar/>
    <div class="picture-wrap" v-show="picData.length">
      <template v-for="(item, index) in picData" :key="index">
        <PictureItem :item="item"/>
      </template>
    </div>
  </div>
</template>

<script>
import {
  getCurrentInstance,
  reactive,
  toRefs,
} from 'vue';
import PictureUtilsBar from './PictureUtilsBar.vue';
import PictureItem from './PictureItem.vue';

export default {
  components: {
    PictureUtilsBar,
    PictureItem,
  },
  setup() {
    const { ctx } = getCurrentInstance();

    const state = reactive({
      picData: [],
      picColHeight: [],
    });

    async function getPicData() {
      const res = await ctx.$axios.get('/img/acjson', {
        tn: 'resultjson_com',
        logid: 9027656394908172384,
        ipn: 'rj',
        ct: '201326592',
        fp: 'result',
        queryWord: '动漫美女',
        word: '动漫美女',
        width: null,
        height: null,
        pn: 30,
        rn: 30,
      });
      if (!res.data) {
        ctx.$notify.error(null, '图片获取失败！');
        return;
      }
      state.picData = state.picData.concat(res.data);
    }
    getPicData();

    return {
      ...toRefs(state),
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
}
</style>
