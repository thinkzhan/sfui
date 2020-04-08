<template>
  <div>
    <table-search-maker :search="search" :table="table" :api="api" :page="page" />
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
        labelWidth: "50px",
        model: "form"
      },
      table: {
        tag: "el-table",
        label: "活动类型",
        options: [
           {
            label: "页码",
            prop: "page",
          },
          {
            label: "姓名",
            prop: "name",
            width: "200"
          },
          {
            label: "性别",
            prop: "sex",
            scopedSlots: {
              default: ({row})=> {
                return { 0: "男", 1: "女" }[row.sex];
              }
            }
          },
          {
            label: "操作",
            scopedSlots: {
              default: ({row})=> {
                return <el-button type="small" onClick={e => this.$alert(row)}>编辑</el-button>;
              }
            }
          }
        ]
      },
      page: {
        size: 10
      }
    };
  },
  methods: {
    getData(params) {
      // 模拟接口
      return new Promise(resolve => {
        setTimeout(() => {
          const random = Math.round(Math.random());
          const total = params.page * params.size + 1;
          const mock = {
            total,
            list: new Array(params.size).fill({
              page: params.page,
              name: (params && params.name) || ["王", "李"][random],
              sex: (params && params.sex) || random
            })
          };
          resolve(mock);
        }, 1000);
      });
    }
  }
};
</script>