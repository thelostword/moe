<template>
  <div class="account" ref="account">
    <div class="account-info" :class="showDropDown && 'active'" @click="toggleDropDown">
      <div v-html="userAvatar('losting')"></div>
      <span>{{ isLogin ? 'losting' : '游客' }}</span>
    </div>
    <AccountDropDown v-show="showDropDown" @menu-click="toggleDropDown"/>
  </div>
</template>

<script>
import {
  computed,
  reactive,
  toRefs,
  ref,
  onMounted,
  onUnmounted,
} from 'vue';
import { useStore } from 'vuex';
import AccountDropDown from './AccountDropDown.vue';

const jdenticon = require('jdenticon');

export default {
  components: {
    AccountDropDown,
  },
  setup() {
    const state = reactive({
      showDropDown: false,
    });
    const store = useStore();
    const isLogin = computed(() => store.state.isLogin);

    // 用户默认头像
    function userAvatar(val) {
      return jdenticon.toSvg(val, 30);
    }
    // 显示/隐藏下菜单
    function toggleDropDown() {
      state.showDropDown = !state.showDropDown;
    }

    const account = ref(null);
    function clickOther(e) {
      if (account.value) {
        if (!account.value.contains(e.target)) {
          state.showDropDown = false;
        }
      }
    }

    onMounted(() => {
      document.addEventListener('mouseup', (e) => {
        clickOther(e);
      });
    });

    onUnmounted(() => {
      document.removeEventListener('mouseup', clickOther);
    });

    return {
      isLogin,
      ...toRefs(state),
      account,
      userAvatar,
      toggleDropDown,
    };
  },
};
</script>

<style lang="scss" scoped>
.account {
  position: relative;
  &-info {
    display: flex;
    align-items: center;
    >span {
      margin-left: 5px;
      font-size: var(--font-size-base);
      cursor: pointer;
    }
    &::after {
      display: inline-block;
      content: '';
      border: 4px solid transparent;
      border-bottom-width: 0;
      border-top-color: var(--color-6);
      margin-left: 5px;
      transition: all .25s;
      cursor: pointer;
    }
    &.active {
      &::after {
        transform: rotateZ(180deg);
      }
    }
  }
}
</style>
