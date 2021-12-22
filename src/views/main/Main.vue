<template>
  <el-container style="height: 100vh">
    <el-header>
        <site-header @toggleMenu="leftmenu=!leftmenu"></site-header>
    </el-header>
    <el-container>
      <el-aside width="auto" v-if="store.state.token.role !=='guest' ">
        <left-menu :collapse="leftmenu"></left-menu>
      </el-aside>
      <div class="main">
        <router-view></router-view>
      </div>
    </el-container>
  </el-container>
</template>

<script setup>
import {computed, ref, reactive, onMounted, provide, onUnmounted} from 'vue'
import {useStore} from 'vuex'
import SiteHeader from './SiteHeader.vue'
import LeftMenu from './LeftMenu.vue'

const store = useStore()
const leftmenu = ref(false)

provide('user', computed(()=>store.state.token))

</script>

<style lang="scss" scoped>
.el-header {
  background: #1565c0 ;
  text-align: left;
}

// .el-aside{
//   // background:#545c64;
//   border-right: solid 0.5px silver;
// }

.el-footer{
  background-color:#909399;
  color: whitesmoke;
  height: 20px;
  line-height: 20px;
  font-size: 10px;
}
  .main{
    --el-main-padding: 20px;
    display: block;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    padding: var(--el-main-padding);
  }
</style>
