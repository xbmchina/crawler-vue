<template>
  <div>
    <div class="background">
      <el-image :src="imgUrl"></el-image>
    </div>
  </div>
</template>
<script>
export default {
  name: "BackgroundTab",
  methods: {
    handleClick(row) {
      console.log(row);
    },
  },
  data() {
    return {
      imgUrl:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
    };
  },
};
</script>

<style>
.background {
  width: 100%;
  height: 100%; /**宽高100%是为了图片铺满屏幕 */
  z-index: -1;
  position: absolute;
}
</style>
