<template>
  <el-container  class="search">
  <el-main>
    <el-row type="flex" justify="center">
      <el-col :span="6">
        <el-input>

        </el-input>
      </el-col>
      <el-col :span="2" style="margin-left: 10px">
        <el-popover
            placement="bottom"
            width="200"
            trigger="manual"
            v-model="visible">
          <el-input v-for="(value,name) in bookInfo" :placeholder="name" :key="name" v-model="bookInfo[name]" style="margin-top: 10px"></el-input>
          <el-button slot="reference" @click="cli()">高级选项</el-button>
        </el-popover>
      </el-col>
      <el-col :span="1">
        <el-button @click="cli()">搜索</el-button>
      </el-col>
    </el-row>
  </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      text:"",
      bookInfo:{
        ISBN:"",
        Title:"",
        Author:"",
        Publisher:"",
        KeyWords:"",
        Digest:"",
        Category:"",
        PublishTime:""
      }
    };
  },
  methods:{
    cli(){
      this.visible = !this.visible
      console.log(this.text)
      console.log(this.bookInfo)
    }
  }
};
</script>
<style>
  .search{
    
  }
</style>