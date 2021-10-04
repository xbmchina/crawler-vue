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
      <el-col :span="2">
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
      :current-page.sync="pageNum"
      :page-size="10"
      layout="total, prev, pager, next"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
<script>
import {
  listArticles,
  listAllFavorites,
  addFavorite,
  delArticle,
} from "@/api/article";

export default {
  name: "ArticleNews",
  mounted() {
    this.getAllFavorites();
    this.getAllArticles(this.pageNum, this.pageSize, this.sourceIds);
  },
  methods: {
    handleDel(aid) {
      delArticle({
        id: aid,
      }).then((response) => {
        console.log(response);
        if (response.code === 200) {
          this.$message({
            message: "操作成功",
            type: "success",
          });
          this.pageNum = 1;
          this.getAllArticles(this.pageNum, this.pageSize, this.sourceIds);
        } else {
          this.$message.error("操作失败");
        }
      });
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getAllArticles(this.pageNum, this.pageSize, this.sourceIds);
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      this.getAllArticles(this.pageNum, this.pageSize, this.sourceIds);
    },
    getAllFavorites() {
      listAllFavorites().then((response) => {
        console.log(response);
        this.favoritesList = response.data;
      });
    },
    getAllArticles(pageNum, pageSize, sourceIds) {
      listArticles({
        pageNum,
        pageSize,
        sourceIds
      }).then((response) => {
        console.log(response.data.list);
        this.articleList = response.data.list;
        this.total = response.data.total;
      });
    },
    handleCommand(command) {
      addFavorite({
        articleId: command.aid,
        favoriteId: command.fid,
      }).then((response) => {
        console.log(response);
        if (response.code === 200) {
          this.$message({
            message: "添加成功",
            type: "success",
          });
          this.pageNum = 1;
          this.getAllArticles(this.pageNum, this.pageSize, this.sourceIds);
        } else {
          this.$message.error("添加失败");
        }
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
      pageNum: 1,
      pageSize: 10,
      sourceIds: "news",
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
