
<template lang="pug">
div
    md
    layout(:source="demoTxt1" title="默认带按钮")
      demo1
    layout(:source="demoTxt2" title="禁用")
      demo2
</template>
<script>
import Layout from '../../../docs/layout'
import md from './desc.md'
export default {
  components: {
      Layout,
      md,
      demo1: require('../demo/1').default,
      demo2: require('../demo/2').default,
  },
  data() {
    return {
      demoTxt1: require('!raw-loader!../demo/1'),
      demoTxt2: require('!raw-loader!../demo/2')
    }
  }
};
</script>
