<template>
  <div>
    <el-row :gutter="24">
      <el-col :span="4" v-for="tool in toolList" :key="tool.name">
        <div style="text-align: center; margin-top: 8px">
          <el-link
            :underline="false"
            class="tool-site"
            :href="tool.url"
            target="_blank"
          >
            <el-image class="tool-icon" :src="tool.icon"></el-image>
            <span>{{ tool.name }}</span>
          </el-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { listAllToolkit } from "@/api/toolkit";

export default {
  name: "ToolKitTab",
  mounted() {
    this.getAllToolKit();
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    getAllToolKit() {
      listAllToolkit().then((response) => {
        console.log(response);
        this.toolList = response.data;
      });
    },
  },
  data() {
    return {
      imgUrl: "",
      toolList: [
        {
          url: "https://github.com/",
          icon: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          name: "GiHub",
        },
      ],
    };
  },
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.tool-site {
  position: relative;
  text-align: center;
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
  /* background-image: url("~@/assets/github.png"); */
}
</style>
