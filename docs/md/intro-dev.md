### 组件开发

1、 参考`package/DemoComponent`进行组件开发

2、 在`docs/doc.config.js`中进行router配置

3、 `npm run dev`启动文档服务

### 组件打包
生成`dist/index.js`可用来做npm发布

```
npm run build:lib
```

### 组件测试

1、 参考`packages/DemoComponent/test`进行组件测试用例编写, 规定组件必须含有test


2、 `npm run test:lib`启动测试

- [mocha](https://mochajs.org/)

- [mocha-webpack](https://vue-test-utils.vuejs.org/zh/guides/testing-single-file-components-with-mocha-webpack.html)


### doc打包
生成`dist/index.html` `dist/pc.js`可用来做静态部署

```
npm run build
```
