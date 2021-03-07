<template>
  <div class="item">
    <div class="item-cover"
      :style="`background-image: url(${getImgUrl(item.sites)})`"
    ></div>
    <div class="item-inner">
      <div class="item-inner__title">
        <strong>{{ item.title }}</strong>
      </div>
      <div class="item-inner__detail">
        <div>
          <strong>中文名：</strong>
          <span>{{ handleTitleCn(item.titleTranslate) || 'Null' }}</span>
        </div>
        <div>
          <strong>放送日期：</strong>
          <span>{{ handleDate(item.begin) }}</span>
        </div>
        <div>
          <strong>官网：</strong>
          <a
            :href="item.officialSite"
            target="_blank"
            rel="noopener noreferrer"
          >{{ item.officialSite }}</a>
        </div>
        <div>
          <strong>资源站：</strong>
          <template v-if="item?.sites?.length">
            <a
              v-for="(site, index) in item.sites"
              :key="index"
              :href="handleVideoSite(site)"
              target="_blank"
              rel="noopener noreferrer"
              :class="site.site"
            >{{ site.site }}</a>
          </template>
          <span v-else>暂无资源</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    item: Object,
    siteMeta: Object,
  },
  setup(props) {
    function getImgUrl(data) {
      if (!data || !data.length) {
        return null;
      }
      const bangumi = data.filter((item) => item.site === 'bangumi');
      return `https://bgm.ideapart.com/sources/bangumi_${bangumi[0].id}.jpg`;
    }

    function handleTitleCn(data) {
      if (!data || !data['zh-Hans']) {
        return null;
      }
      return data['zh-Hans'][0];
    }

    function handleDate(date) {
      return moment(date).locale('zh-cn').format('LL');
    }

    function handleVideoSite(data) {
      return props.siteMeta[data.site].urlTemplate.replace(/{{id}}/g, `${data.id}`);
    }

    return {
      getImgUrl,
      handleTitleCn,
      handleDate,
      handleVideoSite,
    };
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  padding: 15px;
  margin-bottom: 20px;
  background-color: var(--color-white);
  box-shadow: 0 4px 8px var(--color-black-o1);

  &-cover {
    width: 125px;
    height: 170px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-right: 20px;
    border-radius: 5px;
  }
  &-inner {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__title {
      font-size: var(--font-size-md);
      color: var(--color-3);
    }
    &__detail {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin-top: 15px;
      >div {
        >strong {
          display: inline-block;
          min-width: 70px;
        }
        >a {
          &:not(:last-of-type) {
            margin-right: 10px;
          }
          display: inline-block;
          height: 20px;
          line-height: 20px;
          padding: 0 8px;
          border-radius: 10px;
          &:hover {
            text-decoration: underline;
          }
          &.bangumi {
            background-color: var(--color-theme);
            color: var(--color-white);
          }
          &.acfun {
            background-color: #fd4c5d;
            color: var(--color-white);
          }
          &.bilibili {
            background-color: var(--color-bili-pink);
            color: var(--color-white);
          }
          &.iqiyi {
            background-color: #16e067;
            color: var(--color-white);
          }
          &.qq {
            background-color: #ff5c38;
            color: var(--color-white);
          }
          &.nicovideo {
            background-color: #222222;
            color: var(--color-white);
          }
        }
      }
    }
  }
}
</style>
