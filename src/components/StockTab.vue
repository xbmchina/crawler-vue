<template>
  <div class="stock-content">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="22">
        <h4>今日行情</h4>
        <el-table
          :data="stockList"
          style="width: 100%"
          :row-class-name="tableRowClassName"
        >
          <el-table-column prop="name" label="名称"> </el-table-column>
          <el-table-column prop="price" label="当前价格"> </el-table-column>
          <el-table-column prop="ratio" label="涨幅"></el-table-column>
          <el-table-column prop="remark" label="备注"> </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >查看</el-button
              >
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "StockTab",
  methods: {
    tableRowClassName({ rowIndex }) {
      let ratioStr = this.stockList[rowIndex].ratio.replaceAll("%", "");
      let ratio = parseFloat(ratioStr);
      if (ratio > 0) {
        return "success-row";
      }
      return "warning-row";
    },
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
