
<template lang="pug">
div
  div.demo-title {{title}}
  div.demo-ctn
    div.demo
      slot
    div.open(v-if="source" @click="showSource=!showSource") {{showSource?'收起':'展开'}}代码
    pre.source(v-if="showSource")
      p(v-html="sourceHlj")
</template>
<script>
import vue from "vue";
import element from "element-ui";
import ui from "../libs";
vue.use(element);
vue.use(ui)

export default {
  props: {
    title: '',
    source: "",
  },
  data() {
    return {
      showSource: false,
      sourceHlj: ''
    };
  },
  watch:{
    showSource(v) {
      if (v && !this.sourceHlj) {
        this.sourceHlj = hljs.highlightAuto(this.source).value
      }
    }
  }
};
</script>
<style scoped>
.demo-title {
  line-height: 60px;
  font-size: 20px;
  font-weight: 500;
}

.demo-ctn {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .2s;
}
.demo-ctn .demo {
  padding: 24px;
}
.open {
  border-top: 1px solid #eaeefb;
  height: 44px;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-align: center;
  margin-top: -1px;
  line-height: 44px;
  color: #827776;
  cursor: pointer;
  position: relative;
}
.source {
  max-height: 400px;
  overflow: scroll;
  background-color: #fafafa;
  padding: 20px;
}
</style>