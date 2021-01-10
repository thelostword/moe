import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/style/style.scss';

/* 路由发生变化修改页面title */
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

createApp(App).use(store).use(router).mount('#app');
