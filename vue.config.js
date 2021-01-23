module.exports = {
  assetsDir: 'static',
  devServer: {
    proxy: {
      // 哔哩哔哩
      '/bili': {
        target: 'https://bangumi.bilibili.com/web_api',
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          '^/bili': '',
        },
      },

      // 图片（百度）
      '/img': {
        target: 'https://image.baidu.com/search',
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          '^/img': '',
        },
      },

      /**
       * 百度搜索提醒
       * https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd={}
       */
      '/search': {
        target: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy',
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          '^/search': '',
        },
      },
    },
  },
};
