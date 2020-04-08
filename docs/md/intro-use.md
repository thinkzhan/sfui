## 如何引入

### 一、npm方式
```javascript
npm i sfui --save
```

#### 1、完整引入

```javascript
// 全部组件被自动install, 可直接使用
import Sfui from 'sfui'
```

```javascript
// 手动引入组件, 注意并不是按需引入，并不能减小体积
import { DemoComponent } from 'sfui'
export default {
    components: {
        DemoComponent
    }
}
```

#### 2、按需引入

借助 `babel-plugin-component`，可以只引入需要的组件，以达到减小项目体积的目的

首先，项目中安装依赖`babel-plugin-component`

其次，项目.babelrc 修改为：

```javascript
"plugins": [
  ["component", {
    "libraryName": "sfui",
    "libDir": "packages",
    "style": false,
    "camel2Dash": false
  }]
]
```
然后，再使用以下写法，就能只引入DemoComponent，而不引入sfui中的其他组件，但其中使用的新语法，应自行处理

```javascript
import { DemoComponent } from 'sfui'
```

### 二、script外链引入

```javascript
<script type="text/javascript" src="{{todo}}"></script>
```
外链方式引入后，全局可访问到sfui变量

`window.sfui.DemoComponent();`
