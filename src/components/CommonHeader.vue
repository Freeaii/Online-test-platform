<template>
  <header>
    <div class="l-content">
      <!-- <el-avatar plain  @click="handleMenu">
      </el-avatar> -->
      <el-icon size="mini" color="red">
      <Edit />
    </el-icon>
      <!-- <el-icon ><edit /></el-icon> -->

      <!-- <h3 style="color: #fff">{{ getTitle }}</h3> -->
    </div>
    <div class="r-content">
      <el-dropdown>
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>  
      </el-dropdown>
      
    </div>
  </header>
</template>

<script setup>
import {ref} from 'vue'

  const title = ref('title')

  const handleMenu = ()=> {
      this.$store.commit('collapseMenu')
    
  }
   //computed: {
    // getTitle () {
    //   return this.$store.state.tab.name
    // }

</script>

<style lang="scss" scoped>
header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}

.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}

.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>