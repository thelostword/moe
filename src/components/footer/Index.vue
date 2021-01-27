<template>
  <footer>
    <section class="hitokoto" v-if="hitokotoData?.hitokoto">
      <div>
        <a
          href="https://hitokoto.cn"
          target="_blank"
          rel="noopener noreferrer"
        >{{ hitokotoData?.hitokoto }}</a>
      </div>
      <span v-if="hitokotoData?.from || hitokotoData?.from_who">
        —— {{ hitokotoData?.from_who }}「{{ hitokotoData?.from }}」
        </span>
    </section>
  </footer>
</template>

<script>
import { getCurrentInstance, reactive, toRefs } from 'vue';

export default {
  setup() {
    const { ctx } = getCurrentInstance();
    const state = reactive({
      hitokotoData: null,
    });

    async function getHitokoto() {
      // v1.hitokoto.cn
      // international.v1.hitokoto.cn
      const res = await ctx.$axios.get('https://v1.hitokoto.cn', {
        max_length: 48,
      });
      if (!res) {
        return;
      }
      state.hitokotoData = res;
    }
    getHitokoto();

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  min-width: 960px;
  height: var(--footer-height);
  padding: 20px;
  background-color: var(--color-black-o7);
  z-index: var(--header-z-index);

  .hitokoto {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    color: var(--color-white);
    >div {
      display: flex;
      justify-content: space-between;
      height: 36px;
      >a {
        padding: 0 10px;
        line-height: 18px;
        color: inherit;
        align-self: flex-start;
        &:hover {
          text-decoration: underline;
        }
      }
      &::before {
        content: '『';
        align-self: flex-start;
      }
      &::after {
        content: '』';
        align-self: flex-end;
      }
    }
    >span {
      align-self: flex-end;
      margin-top: 10px;
    }
  }
}
</style>
