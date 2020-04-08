

## FormMaker

以配置化的方式书写el-form组件

```javascript
form-maker(
    :config="{}"
)
```
----

#### 自定义属性
|属性名称| 属性含义| 类型|
- | :-: | :-: | 
fields | 表单项配置（同ElementMaker） |  Array|
model | 表单名 | String|
modelValue | 表单值 | Object |
rules | 校验规则 | Object |

#### element-ui属性

除了上述属性外，其他属性和elment-ui一致，属性书写方式形如`minWidth`或`min-width`


----