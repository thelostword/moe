<template>
  <div class="search">
    <transition name="searchFade">
      <SearchItem :itemData="searchConfig[0].item" v-show="!searchStatus"/>
    </transition>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import SearchItem from '@/components/Home/Search/SearchItem.vue';
import searchConfig from '@/components/Home/Search/config-search';

export default {
  components: {
    SearchItem,
  },
  setup() {
    const store = useStore();
    const searchStatus = computed(() => store.state.searchStatus);
    return {
      searchConfig,
      searchStatus,
    };
  },
};
</script>

<style lang="scss" scoped>
.searchFade-enter, .searchFade-leave-to {
  opacity: 0
}
.searchFade-leave, .searchFade-enter-to {
  opacity: 1
}
.searchFade-enter-active, .searchFade-leave-active {
  transition: all .2s
}
</style>
