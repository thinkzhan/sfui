<template>
  <div>
      <!-- or: v-model="conf.modelValue" -->
      <element-maker
        :config="config" 
        @input="onInput"
      />
      <p class="demo-result">input： {{config.modelValue}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      config: {
        tag: "el-input",
        label: "活动名称",
        model: "name",
        modelValue: '66',
        suffixIcon: "el-icon-date"
      }
    }
  },
  methods: {
    onInput(v) {
      this.$set(this.config, 'modelValue', v)
    }
  }
};
</script>
