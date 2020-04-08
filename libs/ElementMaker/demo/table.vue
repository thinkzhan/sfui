<template>
<element-maker 
  v-model="config.modelValue" 
  :config="config" 
/>
</template>
<script>
export default {
  data() {
    return {
      config: {
        tag: "el-table",
        label: "活动类型",
        stripe: true,
        options: [
          {
            label: "日期",
            prop: "date",
            width: '200'
          },
          {
            label: "王小虎",
            prop: "name"
          },
          {
            label: "王小虎",
            scopedSlots: {
              default() {
                return 'scopedSlots'
              }
            },
          }
        ],
        data: [
          {
            date: "2016-05-02",
            name: "王小虎"
          },
          {
            date: "2016-05-04",
            name: "王小虎"
          }
        ]
      }
    };
  }
};
</script>
