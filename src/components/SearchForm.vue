<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="12">
        <div>
          <el-input
            placeholder="搜一搜"
            v-model.trim="searchKeyWord"
            class="input-with-select"
            @keyup.enter.native="submitSearch()"
            clearable
          >
            <el-select
              v-model="searchEngine"
              slot="prepend"
              placeholder="请选择"
            >
              <el-option label="百度" value="0"></el-option>
              <el-option label="谷歌" value="1"></el-option>
              <el-option label="搜狗" value="2"></el-option>
              <el-option label="必应" value="3"></el-option>
            </el-select>
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="submitSearch"
            ></el-button>
          </el-input>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  data() {
    return {
      searchKeyWord: "",
      searchEngine: "0",
      searchEngineList: [
        "https://www.baidu.com/s?wd=",
        "https://www.google.com/search?q=",
        "https://www.sogou.com/sogou?query=",
        "https://cn.bing.com/search?q=",
      ],
    };
  },
  methods: {
    submitSearch() {
      if (this.searchKeyWord) {
        window.open(
          this.searchEngineList[this.searchEngine] + this.searchKeyWord,
          "_blank"
        );
      }
    },
  },
};
</script>

<style>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
