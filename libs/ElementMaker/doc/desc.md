

## ElementMaker

以配置化的方式书写elment-ui组件

以此为基础可以衍生出更高级的配置化组件

```javascript
element-maker(
    :config="{tag:'el-input'}"
)
```
----
#### vue render属性

[Vue render&jsx](https://cn.vuejs.org/v2/guide/render-function.html)
```
class: {},
attrs: {},
props: {},
on: {},
style: {},
domProps: {},
nativeOn: {},
directives: [],
slot: null,
scopedSlots: {},
key: null,
ref: null
```
props属性不需要显示指定，默认属性都在props下
 
#### 自定义属性
|属性名称| 属性含义|
- | :-: | 
tag | 组件名称 | 
model | 原v-model属性的字段名称 | 
modelValue | 原v-model属性的字段值 | 
options | 子组件的数据配置，如checkbox| 
data | 某些组件的数据来源，如table | 

#### element-ui属性

除了上述属性外，其他属性和elment-ui一致，属性书写方式形如`minWidth`或`min-width`


----