import {
  createApp,
  h,
  reactive,
} from 'vue';
import NotifyComponent from './NotifyComponent.vue';

const NotifyList = reactive([]);

function handleData(type, title, content) {
  NotifyList.push({ type, title, content });

  setTimeout(() => {
    if (NotifyList.length > 0) {
      NotifyList.shift();
    }
  }, 2500);

  const app = createApp({
    render() {
      return h(NotifyComponent, { NotifyList });
    },
  });
  app.mount('#Notify');
}

/* eslint-disable */
class NotifyClass {
  // 普通提示
  info(title, content) {
    handleData('info', title || 'Tip', content);
  }
  // 警告提示
  wraning(title, content) {
    handleData('wraning', title || 'Wraning', content);
  }
  // 成功提示
  success(title, content) {
    handleData('success', title || 'Success', content);
  }
  // 错误提示
  error(title, content) {
    handleData('error', title || 'Error', content);
  }
}

const Notify = new NotifyClass();

export default Notify;
