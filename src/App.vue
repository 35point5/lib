<template>
  <div id="app">
    <LibNavi msg="Welcome to Your Vue.js App"/>
<!--    <LibSearch class="ct"></LibSearch>-->
    <router-view></router-view>
  </div>
</template>

<script>
import LibNavi from './components/LibNavi.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue'
Vue.use(ElementUI)
export default {
  name: 'App',
  components: {
    LibNavi
  }
}
</script>

<style>
  #app{
    /*position: absolute;*/
    /*margin: auto;*/
    /*top: 0;*/
    /*left: 0;*/
    /*bottom: 0;*/
    /*right: 0;*/
    height: 100%;
  }
</style>
