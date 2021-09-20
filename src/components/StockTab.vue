<template>
  <div class="stock-content">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="22">
        <div>
          <h4>今日行情</h4>
          <el-switch
            v-model="openWs"
            @change="changeOpenWs($event, openWs)"
            active-color="#13ce66"
            inactive-color="#ff4949"
          ></el-switch>
        </div>
        <el-table
          :data="stockList"
          style="width: 100%"
          :row-class-name="tableRowClassName"
        >
          <el-table-column prop="name" label="名称"> </el-table-column>
          <el-table-column prop="sellPrice" label="当前价格"> </el-table-column>
          <el-table-column prop="ratio" label="涨幅"></el-table-column>
          <el-table-column prop="remark" label="备注"> </el-table-column>
          <!-- <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >查看</el-button
              >
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column> -->
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { listAllStock } from "@/api/stock";
import { Notification } from "element-ui";

export default {
  name: "StockTab",
  mounted() {
    this.getAllStockList();
  },
  methods: {
    changeOpenWs(state) {
      if (state) {
        this.openSocket();
      } else {
        if (this.socket != null) {
          this.socket.close();
          this.socket = null;
        }
      }
    },
    tableRowClassName({ rowIndex }) {
      let ratioStr = this.stockList[rowIndex].ratio;
      let ratio = parseFloat(ratioStr);
      if (ratio > 0) {
        return "success-row";
      }
      return "warning-row";
    },
    handleClick(row) {
      console.log(row);
    },
    getAllStockList() {
      listAllStock().then((response) => {
        console.log("stock=" + response.data);
        this.stockList = response.data;
      });
    },
    openSocket() {
      console.log("正在连接服务....");
      if (typeof WebSocket == "undefined") {
        console.log("您的浏览器不支持WebSocket");
      } else {
        console.log("您的浏览器支持WebSocket");
        //实现化WebSocket对象，指定要连接的服务器地址与端口  建立连接
        //等同于socket = new WebSocket("ws://localhost:8888/xxxx/im/25");
        //var socketUrl="${request.contextPath}/im/"+$("#userId").val();
        var socketUrl = "http://localhost:8889/stockws/" + this.userId;
        socketUrl = socketUrl.replace("https", "ws").replace("http", "ws");
        console.log(socketUrl);
        if (this.socket != null) {
          this.socket.close();
          this.socket = null;
        }
        this.socket = new WebSocket(socketUrl);
        //打开事件
        this.socket = new WebSocket(socketUrl);
        //打开事件
        this.socket.onopen = function () {
          console.log("websocket已打开");
          //socket.send("这是来自客户端的消息" + location.href + new Date());
          // this.sendMessage()
        };
        //获得消息事件
        this.socket.onmessage = function (msg) {
          console.log(msg.data);
          //发现消息进入    开始处理前端触发逻辑
          Notification({
            title: "最新动态",
            message: msg.data,
          });
        };
        //关闭事件
        this.socket.onclose = function () {
          console.log("websocket已关闭");
        };
        //发生了错误事件
        this.socket.onerror = function () {
          console.log("websocket发生了错误");
        };
      }
    },
    sendMessage() {
      // if (typeof WebSocket == "undefined") {
      //   console.log("您的浏览器不支持WebSocket");
      // } else {
      //   console.log("您的浏览器支持WebSocket");
      //   console.log(
      //     '{"toUserId":"' +
      //       this.toUserId +
      //       '","contentText":"' +
      //       this.content +
      //       '"}'
      //   );
      //   this.socket.send(
      //     '{"toUserId":"' +
      //       this.toUserId +
      //       '","contentText":"' +
      //       this.content +
      //       '"}'
      //   );
      // }
    },
  },
  data() {
    return {
      stockList: [],
      socket: null,
      userId: localStorage.getItem("X-Token"),
      toUserId: "2",
      content: "3",
      openWs: false,
    };
  },
};
</script>

<style>
.stock-content {
  /* margin-top: 1%; */
}
.el-table .warning-row {
  background: rgb(234, 245, 234);
}

.el-table .success-row {
  background: rgb(241, 215, 215);
}
</style>
