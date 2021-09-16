<template>
  <div class="stock-content">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="12">
        <el-tabs type="border-card">
          <el-tab-pane label="常用工具">
            <tool-kit-tab />
          </el-tab-pane>
          <el-tab-pane label="新闻资讯">
            <article-news />
          </el-tab-pane>
          <el-tab-pane label="技术文章">
            <technical-news />
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import ToolKitTab from "./ToolKitTab.vue";
import ArticleNews from "./ArticleNews.vue";
import TechnicalNews from "./TechnicalNews.vue";

export default {
  name: "ContentTab",
  components: {
    ToolKitTab,
    ArticleNews,
    TechnicalNews,
  },
  data() {
    return {};
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
