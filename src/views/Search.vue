<template>
  <div id="search">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="12">
        <div>
          <el-input
            placeholder="搜一搜"
            v-model.trim="keyWord"
            class="input-with-select"
            @keyup.enter.native="submitSearch()"
            clearable
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="submitSearch"
            ></el-button>
          </el-input>
        </div>
      </el-col>
    </el-row>
    <div class="search-page" v-for="article in articleList" :key="article.id">
      <el-link :href="article.sourceUrl" target="_blank">
        <span>{{ article.title }}</span>
      </el-link>
    </div>
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
import { searchArticle } from "@/api/article";

export default {
  name: "Search",
  mounted() {
    console.log("search===" + this.keyWord);
  },
  data() {
    return {
      articleList: [],
      keyWord: this.$route.params.keyword,
      pageNum: 1,
      pageSize: 10,
      total: 0,
    };
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
      this.getAllArticles(this.pageNum, this.pageSize, this.keyWord);
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      this.getAllArticles(this.pageNum, this.pageSize, this.keyWord);
    },
    getAllArticles(pageNum, pageSize, keyword) {
      searchArticle({
        pageNum,
        pageSize,
        keyword,
      }).then((response) => {
        console.log(response.data.list);
        this.articleList = response.data.list;
        this.total = response.data.total;
      });
    },
    submitSearch() {
      if (this.keyWord) {
        this.pageNum = 1;
        this.getAllArticles(this.pageNum, this.pageSize, this.keyWord);
      }
    },
  },
};
</script>

<style>
#search {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
