import { createStore } from 'vuex';

export default createStore({
  state: {
    isLogin: window.localStorage.getItem('_TOKEN'),
    searchStatus: true,
  },
  mutations: {
    SET_LOGIN_STATUS(state, val) {
      state.isLogin = val;
    },
    SET_SEARCH_STATUS(state, val) {
      state.searchStatus = val;
    },
  },
  actions: {
  },
  modules: {
  },
});
