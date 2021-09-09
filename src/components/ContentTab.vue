<template>
  <div class="stock-content">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="12">
        <el-tabs type="border-card">
          <el-tab-pane label="常用工具">
            <tool-kit-tab/>
          </el-tab-pane>
          <el-tab-pane label="新闻资讯">新闻资讯</el-tab-pane>
          <el-tab-pane label="技术文章">技术文章</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import ToolKitTab from "./ToolKitTab.vue";

export default {
  name: "ContentTab",
  components: {
    ToolKitTab,
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
  },
  data() {
    return {
      stockList: [
        {
          name: "海尔智家(sh600690)",
          price: "28.58",
          ratio: "-0.76 %",
          remark: "可买入",
        },
        {
          name: "美的集团(sz000333)",
          price: "73.02",
          ratio: "1.25 %",
          remark: "可卖出",
        },
      ],
    };
  },
};
</script>

<style>
.stock-content {
  margin-top: 1%;
}
.el-table .warning-row {
  background: rgb(234, 245, 234);
}

.el-table .success-row {
  background: rgb(241, 215, 215);
}
</style>
