
<template lang="pug">
div
    md
    layout(:source="demoTxt0" title="完整的搜索表格")
      demo0
    layout(:source="demoTxt2" title="无搜索")
      demo2
    layout(:source="demoTxt3" title="无分页")
      demo3
</template>
<script>
import Layout from '../../../docs/layout'
import md from './desc.md'
export default {
  components: {
      Layout,
      md,
      demo0: require('../demo/0').default,
      demo2: require('../demo/2').default,
      demo3: require('../demo/3').default
  },
  data() {
    return {
      demoTxt0: require('!raw-loader!../demo/0'),
      demoTxt2: require('!raw-loader!../demo/2'),
      demoTxt3: require('!raw-loader!../demo/3')
    }
  }
};
</script>
