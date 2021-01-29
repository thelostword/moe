<template>
  <div class="anime">
    <AnimeHeader :season="season" :total="seasonData.length"/>
    <div class="anime-wrap">
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

    return {
      ...toRefs(state),
      seasonData,
      changeWeek,
      siteMeta,
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
