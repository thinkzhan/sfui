
<template lang="pug">
div
    md
    layout(:source="demoTxt0" title="新增")
      demo0
    layout(:source="demoTxt2" title="编辑")
      demo2

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
  },
  data() {
    return {
      demoTxt0: require('!raw-loader!../demo/0'),
      demoTxt2: require('!raw-loader!../demo/2'),
    }
  }
};
</script>
