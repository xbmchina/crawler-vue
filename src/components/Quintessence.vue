<template>
  <div>
    <el-row v-for="article in articleList" :key="article.id">
      <el-col :span="20">
        <el-link :href="article.sourceUrl" target="_blank">
          <span>{{ article.title }}</span> <span>【{{ article.sort }}】</span>
        </el-link>
      </el-col>
      <el-col :span="2">
        <el-link @click="handleDel(article.id)">删除</el-link>
      </el-col>
    </el-row>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="pageNum"
      :page-sizes="[10, 30, 50]"
      :page-size="10"
      layout="total, sizes, prev, pager, next"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
<script>
import { listQuintessence, delFavorite } from "@/api/article";

export default {
  name: "Quintessence",
  mounted() {
    this.getAllArticles(this.pageNum, this.pageSize);
  },
  methods: {
      handleDel(aid) {
      delFavorite({
        articleId: aid,
      }).then((response) => {
        console.log(response);
        if (response.code === 200) {
          this.$message({
            message: "操作成功",
            type: "success",
          });
          this.pageNum = 1;
          this.getAllArticles(this.pageNum, this.pageSize);
        } else {
          this.$message.error("操作失败");
        }
      });
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getAllArticles(this.pageNum, this.pageSize);
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      this.getAllArticles(this.pageNum, this.pageSize);
    },
    getAllArticles(pageNum, pageSize) {
      listQuintessence({
        pageNum,
        pageSize,
      }).then((response) => {
        console.log(response.data.list);
        this.articleList = response.data.list;
        this.total = response.data.total;
      });
    },
  },
  data() {
    return {
      favoritesList: [],
      articleList: [],
      pageNum: 1,
      pageSize: 10,
      total: 0,
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
  text-align: left;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
