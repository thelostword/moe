<template>
  <div class="item">
    <!-- 搜索方式列表 -->
    <div class="item-select" @mouseover="openDropDown" @mouseleave="closeDropDown">
      <img :src="curTypeIcon">
      <div
        :style="dropDownStatus
          ? `height:${40*itemData.length}px;opacity:1`
          : `height:0;opacity:0`"
      >
        <img
          v-for="(item,index) in itemData"
          :key="index"
          :src="item.icon"
          @click="selectCurType(item.icon, item.type)"
        >
      </div>
    </div>

    <div class="item-wrap">
      <template v-for="(item,index) in itemData" :key="index">
        <form
          v-if="curType===item.type"
          :action="item.action"
          autocomplete="off"
          target="_blank">
          <div class="item-search">
            <input
              :name="item.input_name"
              type="text" v-model="searchVal"
              @blur="handleBlur"
              @focus="handleFocus"
            />
            <i class="iconfont icon-guanbi" v-show="searchVal" @click="clearSearchVal">x</i>
          </div>
          <button type="submit">{{ item.type_name }}</button>
        </form>
        <!-- 联想词 -->
        <ul class="item-res" v-if="resBoxStatus && curType===item.type">
          <li v-for="resItem in searchResData" :key="resItem">
            <a
              :href="`${item.action}?${item.input_name}=${resItem}`"
              target="_blank"
              rel="noopener noreferrer"
            >{{ resItem }}</a>
          </li>
        </ul>
      </template>
    </div>

  </div>
</template>

<script>
import {
  reactive,
  watch,
  toRefs,
  getCurrentInstance,
} from 'vue';

export default {
  props: {
    itemData: Array,
  },
  setup(props) {
    const { ctx } = getCurrentInstance();

    const state = reactive({
      searchVal: null,
      searchResData: [],
      curTypeIcon: props.itemData[0].icon,
      curType: props.itemData[0].type,
      dropDownStatus: false,
      resBoxStatus: false,
      isLoading: false,
    });

    // 获取搜索联想词
    async function getSearch() {
      if (!state.searchVal || state.isLoading) {
        return;
      }
      state.isLoading = true;
      const res = await ctx.$axios.get('/search/su', {
        wd: state.searchVal,
      });
      state.isLoading = false;
      if (!res) {
        return;
      }
      let handleRes = res.match(/\[[^*]+\]/g)[0];
      handleRes = JSON.parse(handleRes);
      state.searchResData = handleRes;
    }

    function handleFocus() {
      if (state.searchVal) {
        state.resBoxStatus = true;
      }
    }
    function handleBlur() {
      setTimeout(() => {
        state.resBoxStatus = false;
      }, 150);
    }

    watch(
      () => state.searchVal,
      (val) => {
        if (val) {
          state.resBoxStatus = true;
          getSearch();
        }
      },
    );

    // 清除输入框中的值
    function clearSearchVal() {
      state.searchVal = null;
    }

    // 点击选择当前搜索方式
    function selectCurType(icon, type) {
      state.curTypeIcon = icon;
      state.curType = type;
      state.dropDownStatus = false;
    }

    // 下拉显示
    function openDropDown() {
      state.dropDownStatus = true;
    }
    // 下拉隐藏
    function closeDropDown() {
      state.dropDownStatus = false;
    }

    return {
      ...toRefs(state),
      clearSearchVal,
      selectCurType,
      closeDropDown,
      openDropDown,
      handleFocus,
      handleBlur,
    };
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  width: 500px;
  height: 32px;

  &-select {
    width: 105px;
    height: 32px;
    >img {
      width: 100%;
      height: 100%;
    }
    >div {
      overflow: hidden;
      width: 100%;
      height: 0;
      transition: all .25s;
      background-color: var(--color-white-o9);
      opacity: 1;
      >img {
        width: 100%;
        height: 32px;
        padding: 4px 0;
        cursor: pointer;
        &:hover {
          background-color: rgba($color: #000000, $alpha: .06);
        }
      }
    }
  }

  &-wrap {
    position: relative;
    flex: 1;
    height: 100%;
    >form {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      >button {
        flex: 1;
        margin: 0;
        border: none;
        padding: 0;
        outline: none;
        cursor: pointer;
        height: 100%;
        background-color: var(--color-theme);
        color: var(--color-white);
      }
    }
  }

  &-res {
    position: absolute;
    top: 33px;
    left: 0;
    width: 300px;
    padding: 5px 0;
    border-radius: 3px;
    background-color: var(--color-white);
    >li {
      padding: 0 10px;
      height: 30px;
      >a {
        display: block;
        width: 100%;
        line-height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      &:hover {
        background-color: rgba($color: #000000, $alpha: .06);
      }
    }
  }
  &-search {
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border: 1px solid var(--color-theme);
    background-color: var(--color-white);

    >input {
      flex: 1;
      border: none;
      outline: none;
      height: 100%;
      box-sizing: border-box;
      padding: 5px;
    }
    .icon-guanbi {
      font-size: var(--font-size-md);
      padding: 5px;
    }
  }
}
</style>
