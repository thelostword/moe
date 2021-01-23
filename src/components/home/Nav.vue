<template>
  <div class="nav">
    <nav @mouseleave="handleLeave">
      <template v-for="(item, index) in navList" :key="index">
        <router-link
          :to="{ name: item.name }"
          @mouseover="handelOver(index)"
        >
          <Icon
            :icon="item.icon"
            :color="curPathName === item.name ? 'var(--color-theme)' : 'var(--color-6)'"
          />
          <span
            :style="{ color: curPathName === item.name ? 'var(--color-theme)' : 'var(--color-6)' }"
          >{{ item.text }}</span>
        </router-link>
      </template>
    </nav>
    <div class="cursor" :style="`transform: translateX(${current}px)`"></div>
  </div>
</template>

<script>
import Icon from '@/components/Losting/Icon.vue';
import { reactive, toRefs, watch } from 'vue';
import { useRouter } from 'vue-router';

const navList = [
  {
    icon: 'home',
    name: 'Moe',
    text: '主页',
  },
  {
    icon: 'home',
    name: 'Anime',
    text: '动漫',
  },
  {
    icon: 'game',
    name: 'Game',
    text: '游戏',
  },
  {
    icon: 'book',
    name: 'Book',
    text: '阅读',
  },
  {
    icon: 'image',
    name: 'Picture',
    text: '美图',
  },
];

export default {
  components: {
    Icon,
  },
  setup() {
    const router = useRouter();

    const state = reactive({
      current: null,
      before: null,
      curPathName: null,
    });

    function initPosition() {
      state.curPathName = router.currentRoute.value.name;
      Object.keys(navList).forEach((item) => {
        if (navList[item].name === state.curPathName) {
          state.before = item * 90;
          state.current = item * 90;
        }
      });
    }
    initPosition();

    watch(
      () => router.currentRoute.value.name,
      () => {
        initPosition();
      },
    );

    function handleLeave() {
      state.current = state.before;
    }
    function handelOver(index) {
      state.current = index * 90;
    }

    return {
      ...toRefs(state),
      navList,
      handleLeave,
      handelOver,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: var(--color-white-o8);

  >nav {
    display: flex;
    align-items: center;
    >a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      padding: 10px 0;
      margin-right: 30px;
      user-select: none;
      >span {
        margin-left: 5px;
        font-size: var(--font-size-base);
        font-weight: bold;
        color: var(--color-black-o6);
      }
    }
  }

  .cursor {
    width: 60px;
    height: 3px;
    background-color: var(--color-theme);
    border-radius: 3px;
    transition: all .25s;
  }
}
</style>
