<template>
  <div>
    <form-maker 
      :config="config" 
      @change="onChange"
      @submit="onSubmit"
    />
    <p>{{form}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {},
      config: {
        fields: [
          {
            tag: "el-input",
            label: "活动名称",
            model: "name"
          },
          {
            tag: "el-checkbox-group",
            label: "活动类型",
            model: "type",
            options: [
              {
                value: "选项1",
                label: "黄金糕"
              },
              {
                value: "选项2",
                label: "双皮奶"
              }
            ]
          }
        ],
        rules: {
            name: [{ required: true, message: "请输入", trigger: "blur" }]
        },
        btns: {
          submit: '保存',
          reset: true
        },
        labelWidth: "90px",
        model: 'form1',
        modelValue: {
           name: 99,
           type: ['选项1']
        }
      },
    };
  },
  methods: {
    onChange(v) {
      this.form = v;
    },
    onSubmit(v) {
      this.$alert(v)
    },
  }
};
</script>