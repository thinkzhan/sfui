<template>
  <div>
    <table-search-maker :table="table" :api="api" :page="{size:3}" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      api: {
        search: this.getData
      },
      table: {
        options: [
          {
            label: "页码",
            prop: "page"
          },
          {
            label: "姓名",
            prop: "name"
          }
        ]
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