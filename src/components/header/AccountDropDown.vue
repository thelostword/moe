<template>
  <ul class="dropdown">
    <li>注册</li>
    <li>登录</li>
    <li @click="logout">注销</li>
  </ul>
</template>

<script>
export default {
  setup() {
    function logout() {
      window.localStorage.clear();
    }
    return {
      logout,
    };
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  position: absolute;
  right: 0;
  padding: 10px 0;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  border-radius: 5px;
  background-color: var(--color-white);
  display: none;
  overflow: hidden;
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
