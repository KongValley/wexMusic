module.exports = [
  {
    path: 'pages/ad' // 页面路径，同时是 vue 文件相对于 src 的路径
  },
  {
    path: 'pages/login'
  },
  {
    path: 'pages/counter'
  },
  {
    path: 'packageA/logs',
    subPackage: true,
    config: { // 页面配置，即 page.json 的内容
      navigationBarTitleText: '查看启动日志'
    }
  }
]
