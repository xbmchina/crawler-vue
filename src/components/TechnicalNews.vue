<template>
  <div>
    <el-row v-for="article in articleList" :key="article.id">
      <el-col :span="18">
        <el-link :href="article.sourceUrl" target="_blank">
          <span>{{ article.title }}</span> <span>【{{ article.sort }}】</span>
        </el-link>
      </el-col>
      <el-col :span="2">
        <el-link>删除</el-link>
      </el-col>
      <el-col :span="4">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            收藏<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              :command="handleItemCommand(item.id, article.id)"
              v-for="item in favoritesList"
              :key="item.id"
            >
              {{ item.name }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="[10, 30, 50]"
      :page-size="10"
      layout="total, sizes, prev, pager, next"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: "TechnicalNews",
  mounted() {
    this.getAllFavorites();
    this.getAllArticles(this.currentPage, this.pageSize, this.sourceIds);
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
      this.getAllArticles(this.currentPage, this.pageSize, this.sourceIds);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getAllArticles(this.currentPage, this.pageSize, this.sourceIds);
    },
    getAllFavorites() {
      this.axios.get("/api/sys-favorites/list-all").then((response) => {
        this.favoritesList = response.data;
      });
    },
    getAllArticles(currentPage, pageSize, sourceIds) {
      this.axios
        .get(
          "/api/article/list-all?pageNum=" +
            currentPage +
            "&pageSize=" +
            pageSize +
            "&sourceIds=" +
            sourceIds
        )
        .then((response) => {
          this.articleList = response.data.data.list;
          this.total = response.data.data.total;
          console.log(response.data.data.list);
        });
    },

    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    handleCommand(command) {
      console.log(command);
      this.axios
        .put("/api/article-favorite/add", {
          articleId: command.aid,
          favoriteId: command.fid,
        })
        .then((response) => {
          console.log(response);
          this.$message({
            message: response,
            type: "success",
          });
        });
    },
    handleItemCommand(fid, aid) {
      return {
        fid: fid,
        aid: aid,
      };
    },
  },
  data() {
    return {
      favoritesList: [],
      articleList: [],
      currentPage: 1,
      pageSize: 10,
      sourceIds: "3,4,5,6,7,8",
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
