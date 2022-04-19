<template>
  <div>
    <el-container>
      <el-header>

      <el-menu :default-active="this.$router.path" class="el-menu-demo" mode="horizontal" router @select="handleSelect" >
        <el-row type="flex" justify="end">
          <el-menu-item index="/search" class="rt">搜索</el-menu-item>
          <el-menu-item index="/register" class="rt">注册</el-menu-item>
        </el-row>
      </el-menu>

      </el-header>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .rt{
    float: right;
  }
</style>
