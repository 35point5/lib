<template>
  <el-container>
    <el-main>
      <el-row  type="flex" justify="center">
        <el-col :span="6">
          <el-input placeholder="请输入用户名" v-model="Name"></el-input>
        </el-col>
      </el-row>
      <el-row  type="flex" justify="center">
        <el-col :span="6">
          <el-input placeholder="请输入密码" v-model="Password"></el-input>
        </el-col>
      </el-row>
      <el-row  type="flex" justify="center">
        <el-col :span="1">
          <el-button v-on:click="submit">注册</el-button>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
// import axios from "axios";
export default {
  name: "LibReg",
  data(){
    return{
      Name:"",
      Password:""
    }
  },
  methods:{
    submit(){
      const axios = require('axios');
      axios.post('/lib/register?Name=233&Password=666')
      console.log(this.username,this.password)
    }
  }
}
</script>

<style scoped>
  .el-row{
    margin-top: 20px;
  }
</style>