<template>
  <div>
    <transition name="searchFade">
      <Search v-show="searchStatus"/>
    </transition>
    <NavigationMain/>
    <NavigationSecond/>
    <Nav/>
    <router-view class="home-views"/>
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';
import debounce from '@/utils/debounce';
import Search from './Search/Index.vue';
import NavigationMain from './Navigation/Main.vue';
import NavigationSecond from './Navigation/Second.vue';
import Nav from './Nav.vue';

export default {
  components: {
    Search,
    NavigationMain,
    NavigationSecond,
    Nav,
  },
  setup() {
    const store = useStore();
    const searchStatus = computed(() => store.state.searchStatus);

    // 页面滚动时搜索框状态
    function handleScroll() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop < 230) {
        if (!searchStatus.value) {
          store.commit('SET_SEARCH_STATUS', true);
        }
      } else {
        if (!searchStatus.value) {
          return;
        }
        store.commit('SET_SEARCH_STATUS', false);
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', debounce(handleScroll, 200));
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', debounce);
    });

    return {
      searchStatus,
    };
  },
};
</script>

<style lang="scss" scoped>
.home-views {
  padding: 20px;
}
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
