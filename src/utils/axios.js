import axios from 'axios';
// import qs from 'qs';
// import store from '../store';
import notify from '../components/Losting/Notify';

function handleError(code) {
  switch (code) {
    case 400:
      notify.error(code, '错误请求');
      break;
    case 401:
      notify.error(code, '未登录');
      break;
    case 403:
      notify.error(code, '没有权限');
      break;
    case 404:
      notify.error(code, '请求地址不存在');
      break;
    case 405:
      notify.error(code, '请求方法未允许');
      break;
    case 408:
      notify.error(code, '请求超时');
      break;
    case 500:
      notify.error(code, '服务器端出错');
      break;
    case 501:
      notify.error(code, '网络未实现');
      break;
    case 502:
      notify.error(code, '网络错误');
      break;
    case 503:
      notify.error(code, '服务不可用');
      break;
    case 504:
      notify.error(code, '网络超时');
      break;
    case 505:
      notify.error(code, 'http版本不支持该请求');
      break;
    default:
      notify.error(code, `连接错误${code}`);
  }
}

export default {
  async get(url, data) {
    try {
      const res = await axios.get(url, { params: data });
      return Promise.resolve(res.data);
    } catch (error) {
      handleError(error.response.status);
      return null;
    }
  },

  // post(url, data) {
  //   return new Promise((resolve, reject) => {
  //     axios({
  //       method: 'post',
  //       url,
  //       data: qs.stringify(data),
  //     })
  //       .then((res) => {
  //         resolve(res.data);
  //       })
  //       .catch((err) => {
  //         reject(err);
  //       });
  //   });
  // },
};
