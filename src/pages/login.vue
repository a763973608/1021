<template>
  <div>
    <div class="mask">
      <div class="box text-center">
        <!-- 浮生如此，别多会少 -->
        <h1>不如莫遇</h1>
        <select v-model="user.type">
          <option value="" disabled>---万恶之源---</option>
          <option value="0">郭子兴</option>
          <option value="1">朱元璋</option>
          <option value="2">郭天叙</option>
          </select>
        <input type="text" placeholder="username" v-model="user.name">
        <input type="password" placeholder="userpass" v-model="user.pass">
        <button class="btn-third" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import API from "../common/js/API.js"
export default {
  data(){
    return{
      user:{
        name:"",
        pass:"",
        type:""
      }
    }
  },
  methods:{
    login(){
      console.log(this.user)
      this.$axios({
        url:API.login,
        method:"post",
        data:this.user
      }).then(res=>{
        console.log(res)
        if(res.data.isok){
          sessionStorage.setItem("isAdmin",res.data.isAdmin);
          this.$router.push("/index")
        }else{
          alert(res.data.info)
        }
      })
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../common/stylus/index.styl';
</style>
