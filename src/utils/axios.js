import axios from 'axios';
import qs from 'qs';
import { useStore } from 'vuex';

const store = useStore();

axios.defaults.baseURL = 'http://192.168.42.59:3000/api/v1/';

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 设置超时
axios.defaults.timeout = 10000;

axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

axios.interceptors.response.use((response) => {
  if (response.status === 200) {
    return Promise.resolve(response);
  }
  switch (response.status) {
    case 401:
      store.commit('SET_LOGIN_STATUS', false);
      window.localStorage.clear();
      break;
  }
  return Promise.reject(response);
}, (error) => Promise.reject(error));

export default {
  post(url, data) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: qs.stringify(data),
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  get(url, data) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: data,
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
