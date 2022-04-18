<template>
  <div id="app">
    <LibNavi msg="Welcome to Your Vue.js App"/>
    <LibSearch class="ct"></LibSearch>
  </div>
</template>

<script>
import LibNavi from './components/LibNavi.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue'
import LibSearch from "@/components/LibSearch";
Vue.use(ElementUI)
export default {
  name: 'App',
  components: {
    LibSearch,
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
