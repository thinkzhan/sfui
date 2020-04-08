<template>
  <div>
    <table-search-maker :search="search" :table="table" :api="api"  :page="false" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      api: {
        search: this.getData
      },
      search: {
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
        btns: {
          submit: "查询",
          reset: false
        },
        inline: true,
        model: "form",
        modelValue: {
          sex: '0'
        }
      },
      table: {
        tag: "el-table",
        label: "活动类型",
        options: [
          {
            label: "姓名",
            prop: "name"
          },
          {
            label: "性别",
            prop: "sex"
          }
        ]
      }
    };
  },
  methods: {
    getData(params) {
      return new Promise(resolve => {
        resolve({
          list: [
            {
              name: "test",
              sex: "男"
            }
          ]
        });
      });
    }
  }
};
</script>