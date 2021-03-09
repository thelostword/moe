<template>
  <div class="anime">
    <AnimeHeader
      :season="season"
      :total="seasonData.length"
      @search="handleSearch"
      @searchVal="getSearchVal"
    />
    <div class="anime-search" v-if="searchVal && searchData.length">
      <AnimeList :list="searchData" :siteMeta="siteMeta"/>
    </div>
    <div class="anime-wrap" v-else>
      <WeekDayNav :week="curWeek" @change="changeWeek"/>
      <AnimeList :list="animeData" :siteMeta="siteMeta"/>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { items, siteMeta } from 'bangumi-data';
import moment from 'moment';
import AnimeHeader from './AnimeHeader.vue';
import WeekDayNav from './WeekDayNav.vue';
import AnimeList from './AnimeList.vue';

export default {
  components: {
    AnimeHeader,
    WeekDayNav,
    AnimeList,
  },
  setup() {
    const state = reactive({
      season: null,
      animeData: [],
      curWeek: new Date().getDay(),
      searchData: [],
      searchVal: null,
    });

    function getCurrentAnimeSeason() {
      const date = new Date();
      const month = date.getMonth() + 1;
      if (month >= 1 && month < 4) {
        state.season = 1;
      } else if (month >= 4 && month < 7) {
        state.season = 4;
      } else if (month >= 4 && month < 10) {
        state.season = 7;
      } else {
        state.season = 11;
      }
    }
    getCurrentAnimeSeason();

    function getTimeStamp(date) {
      return moment(date).unix() * 1000;
    }
    function getCurrentTimeStamp() {
      return new Date(`${new Date().getFullYear()}-${state.season}`).getTime();
    }

    const seasonData = items.filter((item) => getTimeStamp(item.begin) >= getCurrentTimeStamp());

    function changeWeek(val) {
      state.curWeek = val;
      if (val === 'all') {
        state.animeData = seasonData;
      } else {
        state.animeData = seasonData.filter((item) => moment(item.begin).format('d') === `${val}`);
      }
    }

    // 获取搜索关键字
    function getSearchVal(val) {
      if (!val) {
        state.searchData = [];
      }
      state.searchVal = val;
    }

    // 搜索
    function handleSearch(val) {
      items.forEach((item) => {
        const res = item?.titleTranslate['zh-Hans']?.filter((team) => team.includes(val));
        if (res?.length) {
          state.searchData.push(item);
        }
      });
    }

    return {
      ...toRefs(state),
      seasonData,
      changeWeek,
      siteMeta,
      getSearchVal,
      handleSearch,
    };
  },
};
</script>

<style lang="scss" scoped>
.anime {
  padding: 10px 20px;
  &-wrap {
    display: flex;
    align-items: flex-start;
  }
}
</style>
