<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4">
        <el-link :underline="false" class="tool-site" href="https://element.eleme.io" target="_blank">
          <div class="tool-icon">
          </div>
          <span>默认链接</span>
        </el-link>
      </el-col>
      <el-col :span="4">
        <el-link :underline="false" class="tool-site" href="https://element.eleme.io" target="_blank">
          <div class="tool-icon">
          </div>
          <span>默认链接</span>
        </el-link>
      </el-col>
      <el-col :span="4">
        <el-link :underline="false" class="tool-site" href="https://element.eleme.io" target="_blank">
          <div class="tool-icon">
          </div>
          <span>默认链接</span>
        </el-link>
      </el-col>
      <el-col :span="4">
        <el-link :underline="false" class="tool-site" href="https://element.eleme.io" target="_blank">
          <div class="tool-icon">
          </div>
          <span>默认链接</span>
        </el-link>
      </el-col>
      <el-col :span="4">
        <el-link :underline="false" class="tool-site" href="https://element.eleme.io" target="_blank">
          <div class="tool-icon">
          </div>
          <span>默认链接</span>
        </el-link>
      </el-col>
      <el-col :span="4">
        <el-link :underline="false" class="tool-site" href="https://element.eleme.io" target="_blank">
          <div class="tool-icon">
          </div>
          <span>默认链接</span>
        </el-link>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "ToolKitTab",
  methods: {
    handleClick(row) {
      console.log(row);
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
.tool-site {
  position: relative;
}
.tool-icon {
  width: 64px;
  height: 64px;
  box-sizing: border-box;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  background-image: url('~@/assets/github.png');
}
</style>
