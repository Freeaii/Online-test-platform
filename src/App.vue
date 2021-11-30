<template>
<div id="ct">
  <router-view></router-view>
</div>
</template>


<script setup>
import {provide} from 'vue'
import https from '@/apis/axios.js' 

provide('axios', https) 

</script>


<style scoped>
#ct {
  height: calc(100vh);
  font-family: Helvetica, Tahoma, Arial, "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
  font-family: Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
