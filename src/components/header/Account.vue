<template>
  <div class="account">
    <div class="account-info">
      <svg data-jdenticon-value="adminteam" width="30" height="30"></svg>
      <span>{{ isLogin ? 'losting' : '游客' }}</span>
    </div>
    <AccountDropDown/>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import AccountDropDown from './AccountDropDown.vue';

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
    return {
      isLogin,
      ...toRefs(state),
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
      font-size: var(--font-size-md);
    }
    &::after {
      display: inline-block;
      content: '';
      border: 5px solid transparent;
      border-bottom-width: 0;
      border-top-color: var(--color-6);
      margin-left: 5px;
      transition: all .25s;
    }
  }
  &:hover {
     .account-info::after {
       transform: rotateZ(180deg);
     }
    .dropdown {
      display: block;
    }
  }
}
</style>
