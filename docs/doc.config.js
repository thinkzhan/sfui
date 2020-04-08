const version = process.env.VERSION || require('../package.json').version;

module.exports = {
  mobile: true,
  header: {
    logo: {
      image: 'https://t.focus-res.cn/front-end/image/focus-logo-v2/logo_120_120.png',
      title: 'sfui ' + version,
      href: '#/'
    },
    nav: {
      'sflib': '/doc/sflib/'
    }
  },
  navEnter: '/element-maker',
  nav: [
    // {
    //   name: '文档',
    //   children: [{
    //     path: '/intro-use',
    //     title: '使用指南',
    //     doc: true
    //   }, {
    //     path: '/intro-dev',
    //     title: '开发指南',
    //     doc: true
    //   }]
    // },

    {
      name: '组件',
      groups: [{
        name: 'element-ui',
        children: [{
          path: '/element-maker',
          title: 'ElementMaker'
        },{
          path: '/form-maker',
          title: 'FormMaker'
        },{
          path: '/table-search-maker',
          title: 'TableSearchMaker'
        },{
          path: '/form-dialog-maker',
          title: 'FormDialogMaker'
        }]
      }]
    }
  ]
};
