const Home = () => import('@/components/home/Index.vue');
const Login = () => import('@/components/Login.vue');
const Signup = () => import('@/components/Signup.vue');

const Moe = () => import('@/components/Moe/Index.vue');
const Anime = () => import('@/components/Anime/Index.vue');
const Game = () => import('@/components/Game/Index.vue');
const Book = () => import('@/components/Book/Index.vue');
const Picture = () => import('@/components/Picture/Index.vue');

export default [
  {
    path: '/',
    name: 'Home',
    meta: { title: '萌主页' },
    component: Home,
    children: [
      {
        path: '/',
        name: 'Moe',
        meta: { title: '萌主页' },
        component: Moe,
      },
      {
        path: 'anime',
        name: 'Anime',
        meta: { title: '萌主页-动漫' },
        component: Anime,
      },
      {
        path: 'game',
        name: 'Game',
        meta: { title: '萌主页-游戏' },
        component: Game,
      },
      {
        path: 'book',
        name: 'Book',
        meta: { title: '萌主页-阅读' },
        component: Book,
      },
      {
        path: 'picture',
        name: 'Picture',
        meta: { title: '萌主页-美图' },
        component: Picture,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    meta: { title: '萌主页-登录' },
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    meta: { title: '萌主页-注册' },
    component: Signup,
  },
];
