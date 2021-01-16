import { createStore } from 'vuex';

export default createStore({
  state: {
    isLogin: window.localStorage.getItem('_TOKEN'),
  },
  mutations: {
    SET_LOGIN_STATUS(state, val) {
      state.isLogin = val;
    },
  },
  actions: {
  },
  modules: {
  },
});
