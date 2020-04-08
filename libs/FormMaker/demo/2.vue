<template>
  <div>
    <form-maker 
      :config="config" 
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      config: {
        fields: [
          {
            tag: "el-input",
            label: "名称",
            model: "name",
            style: {
              width: '200px'
            }
          },
          {
            tag: "el-select",
            label: "类型",
            model: "type",
            style: {
              width: '200px'
            },
            options: [
              {
                label: "黄金糕",
                value: "选项1"
              }
            ]
          }
        ],
        model: 'form',
        labelWidth: "50px",
        disabled: true,
        modelValue: {
           name: 99,
           type: '选项1'
        }
      },
    };
  }
};
</script>