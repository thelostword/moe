<template>
  <header>
    <Logo/>
    <Search/>
    <Account/>
  </header>
</template>

<script>
import Logo from './Logo.vue';
import Account from './Account.vue';
import Search from './Search.vue';

export default {
  components: {
    Logo,
    Search,
    Account,
  },
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 0 8px var(--color-black-o1);
  background-color: var(--color-white);
  z-index: var(--header-z-index);
}
</style>
