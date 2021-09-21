<template>
  <div>
    <div class="background">
      <el-image :src="this.dayEnglishDat.picture"></el-image>
    </div>
    <el-row type="flex" justify="end" style="margin-bottom: auto">
      <el-col :span="22" style="text-align: justify;align-items: center;display: flex;justify-content: center;">
        <el-tooltip
        class="item m-tooltip"
        effect="dark"
        :content="dayEnglishDat.translate"
        placement="top-start"
      >
        <el-link type="primary" @click="handleDayEnglishClick"
          >{{dayEnglishDat.content}}</el-link
        >
      </el-tooltip>
      </el-col>
      <el-col :span="1">
        <el-button @click="drawer = true" icon="el-icon-setting" circle>
        </el-button>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="end">
      <el-col :span="4">
        <el-drawer :visible.sync="drawer" :with-header="false">
          <stock-tab />
        </el-drawer>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import StockTab from "./StockTab.vue";
import { listDayEnglish } from "@/api/dayenglish";

export default {
  name: "DrawerTab",
  components: {
    StockTab,
  },
  mounted(){
    this.getListDayEnglish()
  },
  methods: {
    handleDayEnglishClick() {
      let isPlay = false;
     this.mMusicPlayer.playing=function(){
        isPlay = true;
     };
     if(!isPlay){
      this.mMusicPlayer.play();
     }
    },
    getListDayEnglish(){
      listDayEnglish().then((response) => {
        console.log(response);
        this.dayEnglishDat = response.data;
        this.mMusicPlayer = new Audio(this.dayEnglishDat.music);
      });
    }
  },
  data() {
    return {
      drawer: false,
      dayEnglishDat: {
        content: "The family is more important than the dream.",
        translate: "家人是比梦想更重要的事情。",
        picture:"https://staticedu-wps.cache.iciba.com/image/d486eb38c2ccb2a54de3d155a66eb31f.jpg",
        music:"https://staticedu-wps.cache.iciba.com/audio/e9c067a3d87c645ac282ec3a2f1193df.mp3",
      },
      mMusicPlayer: null
    };
  },
};
</script>

<style>
.m-tooltip .el-link--inner {
  font-size: large;
     color: #f5f7fa;
}

.m-tooltip .el-link.el-link--primary:hover {
    color: #f5f7fa;
}

.background {
  width: 100%;
  height: 100%; /**宽高100%是为了图片铺满屏幕 */
  z-index: -1;
  position: absolute;
}
.background .el-image{
  position:fixed;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  min-width: 1000px;
  z-index:-10;
  zoom: 1;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}


</style>
