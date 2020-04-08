<template>
  <div>
    <el-button @click="dialog.visible=true">打开dialog</el-button>
    <form-dialog-maker :form="form" :dialog="dialog" :api="api"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      api: {
        submit: this.submitAPI
      },
      dialog: {
        title: "新增",
        visible: false,
        width: "500px"
      },
      form: {
        fields: [
          {
            tag: "el-input",
            label: "名称",
            model: "name"
          },
          {
            tag: "el-select",
            label: "性别",
            model: "sex",
            options: [
              {
                value: "0",
                label: "男"
              },
              {
                value: "1",
                label: "女"
              }
            ]
          }
        ],
        rules: {
            name: [{ required: true, message: "请输入", trigger: "blur" }]
        },
        btns: {
          submit: "编辑",
          reset: false
        },
        labelWidth: "80px",
        model: "form"
      },
     
    };
  },
  methods: {
    submitAPI(params) {
       // 模拟接口
      return new Promise(resolve => {
          resolve();
      });
    }
  }
};
</script>