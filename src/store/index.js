import { createStore } from 'vuex';

export default createStore({
  state: {
    isLogin: false,
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
