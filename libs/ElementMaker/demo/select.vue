<template>
  <div>
      <element-maker v-model="config.modelValue" :config="config"  />
      <p class="demo-result">input： {{config.modelValue}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      config: {
        tag: "el-select",
        label: "活动类型",
        model: "type",
        modelValue: '选项1',
        clearable: true,
        vIf() { return true },
        options: [{
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        }]
      }
    };
  }
};
</script>
