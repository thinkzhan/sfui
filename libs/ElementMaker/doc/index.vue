
<template lang="pug">
div
    md
    layout(:source="demoTxt1" title="el-input")
      demo1
    layout(:source="demoTxt2" title="el-select")
      demo2
    layout(:source="demoTxt3" title="el-checkbox-group")
      demo3
    layout(:source="demoTxt4"  title="el-table")
      demo4
</template>
<script>
import Layout from '../../../docs/layout'
import md from './desc.md'
export default {
  components: {
      Layout,
      demo1: require('../demo/input').default,
      demo2: require('../demo/select').default,
      demo3: require('../demo/checkbox').default,
      demo4: require('../demo/table').default,
      md
  },
  data() {
    return {
      demoTxt1: require('!raw-loader!../demo/input'),
      demoTxt2: require('!raw-loader!../demo/select'),
      demoTxt3: require('!raw-loader!../demo/checkbox'),
      demoTxt4: require('!raw-loader!../demo/table')
    }
  }
};
</script>
