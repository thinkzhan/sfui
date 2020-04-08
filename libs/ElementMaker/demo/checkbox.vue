<template>
  <element-maker v-model="config.modelValue" :config="config" />
</template>
<script>
export default {
  data() {
    return {
      config: {
        tag: "el-checkbox-group",
        label: "活动类型",
        model: "type"
      }
    };
  },
  mounted() {
    // 模拟异步
    setTimeout(() => {
      this.$set(this.config, "options", [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        }
      ]);
    });
  }
};
</script>
