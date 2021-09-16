<template>
  <div>
    <el-row type="flex" class="row-bg" justify="end">
      <el-col :span="4">
        <el-button class="btn-setting" @click="drawer = true" icon="el-icon-setting" circle>
        </el-button>
        <el-drawer :visible.sync="drawer" :with-header="false">
          <stock-tab />
        </el-drawer>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import StockTab from "./StockTab.vue";

export default {
  name: "DrawerTab",
  components: {
    StockTab,
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style>
.btn-setting{
  margin-top: 1%;
}
</style>
