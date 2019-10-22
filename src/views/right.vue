<template>
  <div class="right">
    <el-row>
      <el-button plain style="margin-top:20px;margin-left:20px;" type="warning" @click="dialogFormVisible = true">添加</el-button>

      <el-dialog title="添加/修改" :visible.sync="dialogFormVisible">
        <el-form>
          <el-form-item label="用户名">
            <el-input v-model="user.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input v-model="user.pass" type="password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input v-model="pass" type="password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="描述">
            <el-input v-model="user.des" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="时间">
            <el-date-picker
              v-model="user.time"
              type="date"
              placeholder="选择日期" autocomplete="off">
            </el-date-picker>
            <!-- <el-input v-model="formdata.time" autocomplete="off"></el-input> -->
          </el-form-item>
          
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button style="background:#98F5FF;" @click="dialogFormVisible = false">取 消</el-button>
          <el-button style="background:#98F5FF;" type="primary" @click="myadd()">确 定</el-button>
          
        </div>
      </el-dialog>

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
          plain
          type="warning" @click="dialogFormVisible = true">查看</el-button>
        <el-button
        style="background:#FF4500"
          size="mini"
          type="text"
          @click="del(scope.row.id)">删除</el-button>
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
      pass: "",
      tableData: [
        {
          des: "",
          id: "",
          name: "",
          pass: "",
          time: ""
        }
      ],
      user: {
        des: "",
        name: "",
        pass: "",
        time: ""
      },
      dialogVisible: false,
      search: "",
      dialogTableVisible: false,
      dialogFormVisible: false,
  
    };
  },
  methods: {
    init(){
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
    },
    myadd() {
      (this.dialogFormVisible = false),
        this.$axios({
          url: API.addManage,
          method: "post",
          data: this.user
        }).then(res => {
          console.log(res);
          if (res.data.isok) {
            alert(res.data.info);
          } else {
            alert(res.data.info);
          }
        });
    },
    del(i) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$axios({
          url: API.delManage,
          method: "post",
          data: {id:i}
        }).then(res => {
          console.log(res);
          if (res.data.isok) {
            // alert(res.data.info);
            console.log(res.data,i);
            this.init();
            
          } else {
            alert(res.data.info);
          }
        });
      });
    },
    isDel() {
      this.isDel = false;
      this.$emit("del", this.id);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },
  mounted() {
   this.init();
  }
};
</script>

<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.right {
  flex: 1;
}
</style>