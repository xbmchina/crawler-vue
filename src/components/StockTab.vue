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
          <el-table-column prop="sellPrice" label="当前价格"> </el-table-column>
          <el-table-column prop="ratio" label="涨幅"></el-table-column>
          <el-table-column prop="remark" label="备注"> </el-table-column>
          <!-- <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >查看</el-button
              >
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column> -->
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { listAllStock } from "@/api/stock";

export default {
  name: "StockTab",
  mounted() {
    this.getAllStockList();
  },
  methods: {
    tableRowClassName({ rowIndex }) {
      let ratioStr = this.stockList[rowIndex].ratio;
      let ratio = parseFloat(ratioStr);
      if (ratio > 0) {
        return "success-row";
      }
      return "warning-row";
    },
    handleClick(row) {
      console.log(row);
    },
    getAllStockList() {
      listAllStock().then((response) => {
        console.log("stock=" + response.data);
        this.stockList = response.data;
      });
    },
  },
  data() {
    return {
      stockList: [],
    };
  },
};
</script>

<style>
.stock-content {
  /* margin-top: 1%; */
}
.el-table .warning-row {
  background: rgb(234, 245, 234);
}

.el-table .success-row {
  background: rgb(241, 215, 215);
}
</style>
