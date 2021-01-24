<template>
  <div class="item" :class="{'active': item.is_published, 'delay': item.delay}">
    <div class="item-time" :class="{'active': item.is_published}">{{ item.pub_time }}</div>
    <div class="item-inner">
      <a
        class="item-inner-cover"
        :href="item.url"
        target="_blank"
        rel="noopener noreferrer"
        :title="item.title"
      >
        <img :src="handleImgUrl(item.square_cover)" :alt="`${item.title}`">
      </a>
      <div class="item-inner-title">
        <a
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          :title="item.title"
        >{{ item.title }}</a>
        <a
          :href="item.is_published ? `https://www.bilibili.com/bangumi/play/ep${item.ep_id}` : item.url"
          target="_blank"
          rel="noopener noreferrer"
          :class="{'active': item.is_published}"
        >{{ item.pub_index }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  setup() {
    function handleImgUrl(url) {
      let link = url;
      link = link.replace(/^http/, 'https');
      return `${link}@128w_128h.webp`;
    }

    return {
      handleImgUrl,
    };
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: flex-start;
  padding: 13px 0 0 10px;
  border-left: 1px dashed var(--color-black-o4);

  &-time {
    position: relative;
    font-size: var(--font-size-sm);
    color: var(--color-6);
    &::before {
      position: absolute;
      left: -13px;
      top: 50%;
      transform: translateY(-50%);
      content: '';
      display: inline-block;
      width: 3px;
      height: 3px;
      border-radius: 50%;
      border: 1px solid var(--color-black-o4);
      background-color: var(--color-white);
    }

    &.active {
      color: var(--color-9);
      &::before {
        border: 1px solid var(--color-bili-pink);
        background-color: var(--color-bili-pink);
      }
    }
  }

  &-inner {
    flex: 1;
    display: flex;

    &-cover {
      width: 64px;
      height: 64px;
      margin: 0 10px;
      >img {
        width: 100%;
        border-radius: 4px;
      }
    }

    &-title {
      flex: 1;
      display: flex;
      flex-direction: column;

      >a {
        &:first-child {
          line-height: 18px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          white-space: normal;
          word-wrap: break-word;
          &:hover {
            color: var(--color-bili-blue);
          }
        }
        &:last-child {
          color: var(--color-6);
          margin: auto 0 3px;
          &.active {
            color: var(--color-bili-pink);
          }
        }
      }
    }
    &.delay {
      opacity: .4;
    }
  }
  &.active {
    border-left: 1px solid var(--color-bili-pink);
  }
}
</style>
