<template>
  <div class="item" v-if="item?.hoverURL">
    <img :src="item?.hoverURL || item?.thumbURL || item?.middleURL" :title="item?.fromURLHost">
    <div>
      <span>
        <a
          :href="handlePicUrl(item?.replaceUrl[0]?.FromURL
          || item?.replaceUrl[0]?.FromUrl
          || item?.replaceUrl[1]?.FromURL)"
          target="_blank" rel="noopener noreferrer"
        >
          {{ item.fromPageTitleEnc }}
        </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  setup() {
    function handlePicUrl(url) {
      let picUrl = url;
      const reg = /^http(s)?:\/\//;
      if (reg.test(picUrl)) {
        picUrl = picUrl.replace(reg, '//');
      } else {
        picUrl = `//${picUrl}`;
      }
      return picUrl;
    }
    return {
      handlePicUrl,
    };
  },
};
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  flex-grow: 1;
  height: 255px;
  padding: 5px;
  overflow: hidden;
  >img {
    min-width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
  >div {
    position: absolute;
    left: 0;
    bottom: -50px;
    width: 100%;
    padding: 5px;
    z-index: 2;
    transition: all .25s;

    >span {
      display: block;
      width: 100%;
      box-sizing: border-box;
      height: 45px;
      line-height: 45px;
      padding: 0 15px;
      background-color: var(--color-black-o6);
      >a {
        display: inline-block;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: var(--color-white);
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  &:hover {
    >div {
      transform: translateY(-50px);
    }
  }
}
</style>
