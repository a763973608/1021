<template>
  <div class="right">
    <el-row>
      <el-button type="info" plain style="margin-top:20px;margin-left:20px;" @click="open">添加</el-button>
    </el-row>
    <el-table border
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 1000px;margin:0 auto" height="300"
    max-height="300">

    <el-table-column
      fixed
      label="序号"
      type="index"
      width="150">
    </el-table-column>
    <el-table-column
      label="姓名"
      prop="name"
      width="200">
    </el-table-column>
    <el-table-column
      prop="des"
      label="属性"
      width="200">
    </el-table-column>
    <el-table-column
      prop="time"
      label="时间"
      width="200">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          style="background:#98F5FF;"
          size="mini"
          @click="handleEdit()">查看</el-button>
        <el-button
        style="background:#FF4500"
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import API from "../common/js/API.js";
export default {
  data() {
    return {
      tableData: [
        {
          des: "",
          id: "",
          name: "",
          pass: "",
          time: ""
        }
      ],
      search: ""
    };
  },
  methods: {
    open() {
      const h = this.$createElement;
      this.$msgbox({
        title: "添加",
        message: h("div", null, [
          h("div", null, [
            h("span", null, "账号："),
            h("input", {
              style: "width:70%;margin:10px 0 10px 50px;padding:0;display:inline-block;"
            })
          ]),
          h("div", null, [
            h("span", null, "密码："),
            h("input", {
              style: "width:70%;margin:10px 0 10px 50px;padding:0;display:inline-block;"
            })
          ]),
          h("div", null, [
            h("span", null, "确认密码："),
            h("input", {
              style: "width:70%;margin:10px 0 10px 20px;padding:0;display:inline-block;"
            })
          ]),
          h("div", null, [
            h("span", null, "描述："),
            h("input", {
              style: "width:70%;margin:10px 0 10px 50px;padding:0;display:inline-block;"
            })
          ]),
          h("div", null, [
            h("span", null, "时间："),
            h("input", {
              style: "width:70%;margin:10px 0 10px 50px;padding:0;display:inline-block;"
            })
          ])
        ]),
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "执行中...";
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 3000);
          } else {
            done();
          }
        }
      }).then(action => {
        this.$message({
          type: "info",
          message: "action: " + action
        });
      });
    },
    handleEdit() {
      const h = this.$createElement;
      this.$msgbox({
        title: "修改",
        message: h("div", null, [
          h("div", null, [
            h("span", null, "用户名:"),
            h("input", {
              style: "margin:10px 10px;padding:0;display:inline-block;"
            })
          ]),
          h("div", null, [
            h("span", null, "密 码："),
            h("input", {
              style: "margin:10px 10px;padding:0;display:inline-block;"
            })
          ]),
          h("div", null, [
            h("span", null, "描 述："),
            h("input", {
              style: "margin:10px 10px;padding:0;display:inline-block;"
            })
          ]),
          h("div", null, [
            h("span", null, "时 间："),
            h("input", {
              style: "margin:10px 10px;padding:0;display:inline-block;"
            })
          ])
        ]),
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "执行中...";
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 3000);
          } else {
            done();
          }
        }
      }).then(action => {
        this.$message({
          type: "info",
          message: "action: " + action
        });
      });
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },
  mounted() {
    this.$axios({
      url: API.findManage,
      method: "post"
    }).then(res => {
      console.log(res);
      if (res.data.isok) {
        this.tableData = res.data.data;
      } else {
        alert(res.data.info);
      }
    });
  }
};
</script>

<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.right {
  flex: 1;
}
</style>