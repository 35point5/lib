<template>
  <el-container  class="search">
  <el-main>
    <el-row type="flex" justify="center">
      <el-col :span="6">
        <el-input v-model="query.Keywords">

        </el-input>
      </el-col>
      <el-col :span="2" style="margin-left: 10px">
        <el-popover
            placement="bottom"
            width="200"
            trigger="manual"
            v-model="visible">
          <el-input v-for="(value,name) in query.BookInfo" :placeholder="name" :key="name" v-model="query.BookInfo[name]" style="margin-top: 10px"></el-input>
          <el-button slot="reference" @click="cli()">高级选项</el-button>
        </el-popover>
      </el-col>
      <el-col :span="1">
        <el-button @click="search()">搜索</el-button>
      </el-col>
    </el-row>
    <el-collapse v-model="activeNames">
      <el-collapse-item v-for="item in result" :key="item.ISBN">
        <template slot="title">
          <el-button size="small" @click="borrow(item.ISBN)">借阅</el-button><el-button type="danger" size="small">删除</el-button>{{item.Title}}
        </template>
      </el-collapse-item>
    </el-collapse>
  </el-main>
  </el-container>
</template>
<script>


export default {
  data() {
    return {
      visible: false,
      text:"",
      query:{
        Keywords:"",
        BookInfo:{
          ISBN:"",
          Title:"",
          Author:"",
          Publisher:"",
          KeyWords:"",
          Digest:"",
          Category:"",
          PublishTime:""
        }
      },
      result:[],
      activeNames:[]
    };
  },
  methods:{
    cli(){
      this.visible = !this.visible
      console.log(this.text)
      console.log(this.query)
    },
    search(){
      const axios = require('axios');

      axios.post('/lib/lookup',this.query).then((resp)=>{
        this.result=resp.data.Data
        console.log(this.result)
      }).catch(function (error) {
        console.log(error);
      });

    },
    borrow(ISBN){
      const axios = require('axios');
      console.log(ISBN)
      axios.post('/lib/borrow',{ISBN:ISBN,Number:1}).then((resp)=>{
        let res=resp.status
        console.log(res)
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
};
</script>
<style>
  .search{
    
  }
</style>