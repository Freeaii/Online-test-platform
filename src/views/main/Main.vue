<template>
  <el-container style="height: 100vh">
    <el-header>
        <site-header @toggleMenu="leftmenu=!leftmenu"></site-header>
    </el-header>
    <el-container>
      <el-aside width="auto" v-if="store.state.token.role !=='guest' ">
        <left-menu :collapse="leftmenu"></left-menu> 
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
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

onUnmounted(()=>{
  console.log('unMounted')
})

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
</style>
