<template>
  <ul class="dropdown">
    <li @click="signUp" v-if="!isLogin">注册</li>
    <li @click="signIn" v-if="!isLogin">登录</li>
    <li @click="settings">设置</li>
    <li @click="logout" v-if="isLogin">注销</li>
  </ul>
</template>

<script>
import { computed, getCurrentInstance } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const { ctx } = getCurrentInstance();
    const store = useStore();

    const isLogin = computed(() => store.state.isLogin);

    function postEmit() {
      ctx.$emit('menu-click');
    }

    function settings() {
      postEmit();
    }

    // 登录
    function signIn() {
      postEmit();
    }
    // 注册
    function signUp() {
      postEmit();
    }
    // 退出登录
    function logout() {
      postEmit();
      window.localStorage.clear();
    }
    return {
      isLogin,
      logout,
      signIn,
      signUp,
      settings,
    };
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  position: absolute;
  right: 0;
  padding: 10px 0;
  margin-top: 5px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  border-radius: 5px;
  background-color: var(--color-white);
  >li {
    min-width: 80px;
    padding: 5px 15px;
    font-size: var(--font-size-base);
    color: var(--color-6);
    cursor: pointer;
    &:hover {
      background-color: rgba(0,0,0,.03);
    }
  }
}
</style>
