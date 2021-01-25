// 搜索栏数据
import iconWebBd from '@/assets/image/search/baidu.png';
import iconWebBing from '@/assets/image/search/bing.png';
import iconGoogle from '@/assets/image/search/google.png';
import iconVideoBilibili from '@/assets/image/search/bilibili.png';
import iconShequBd from '@/assets/image/search/baidu-tieba.png';
import iconMusicQQ from '@/assets/image/search/qq.png';
// import iconBkMoegirl from '@/assets/image/search/moegirl.png';
import iconBkBd from '@/assets/image/search/baidu-baike.png';

export default [
  {
    type: 'web',
    name: '网页',
    item: [
      {
        action: 'https://www.baidu.com/s',
        type: 'baidu',
        input_name: 'wd',
        type_name: '百度搜索',
        icon: iconWebBd,
      },
      {
        action: 'https://cn.bing.com/search',
        type: 'bing',
        input_name: 'q',
        type_name: '必应搜索',
        icon: iconWebBing,
      },
      // {
      //   action: 'http://www.google.com/search',
      //   type: 'google',
      //   input_name: 'q',
      //   type_name: '谷歌搜索',
      //   icon: iconGoogle,
      // },
    ],
  },
  {
    type: 'video',
    name: '视频',
    item: [
      {
        action: 'https://search.bilibili.com/all',
        type: 'bilibili',
        input_name: 'keyword',
        type_name: '哔哩一下',
        icon: iconVideoBilibili,
      },
    ],
  },
  {
    type: 'shequ',
    name: '社区',
    item: [
      {
        action: 'https://tieba.baidu.com/f',
        type: 'tieba',
        input_name: 'kw',
        type_name: '进入贴吧',
        icon: iconShequBd,
      },
    ],
  },
  {
    type: 'pic',
    name: '图片',
    item: [
      {
        action: 'https://search.bilibili.com/all',
        type: 'bilibili',
        input_name: 'keyword',
        type_name: '哔哩一下',
        icon: iconVideoBilibili,
      },
    ],
  },
  {
    type: 'music',
    name: '音乐',
    item: [
      {
        action: 'https://y.qq.com/portal/search.html',
        type: 'QQ',
        input_name: 'w',
        type_name: 'QQ音乐搜索',
        icon: iconMusicQQ,
      },
    ],
  },
  {
    type: 'baike',
    name: '百科',
    item: [
      // {
      //   action: 'https://zh.moegirl.org',
      //   type: 'moegril',
      //   input_name: '/',
      //   type_name: '萌娘百科',
      //   icon: iconBkMoegirl,
      // },
      {
        action: 'https://baike.baidu.com/search',
        type: 'baidu',
        input_name: 'word',
        type_name: '百度百科',
        icon: iconBkBd,
      },
    ],
  },
  {
    type: 'fanyi',
    name: '翻译',
    item: [
      {
        action: 'https://translate.google.cn/?hl=zh-CN&tab=TT#view=home&op=translate&sl=auto&tl=zh-CN',
        type: 'Google',
        input_name: 'text',
        type_name: '谷歌翻译',
        icon: iconGoogle,
      },
    ],
  },
];
