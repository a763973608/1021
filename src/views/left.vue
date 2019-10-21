<template>
  <div class="left">
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark">郭子兴</div></el-col>
    </el-row>
  </div>
</template>

<script>
import API from '../common/js/API.js'
export default {
 
}
</script>

<style lang="stylus" scoped>
@import '../common/stylus/index.styl';
.left{
  width 300px;
  background $info;
  text-align center;
}
.el-row {
    margin 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
.bg-purple-dark {
    background: #FAF0E6;
  }
.grid-content {
    border-radius: 4px;
    min-height: 36px;
    line-height 36px;
  }
</style>