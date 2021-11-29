<template>
    <el-menu
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
    >
        <h3 v-if="!isCollapse">在线测试系统</h3>
        <h3 v-else>Test</h3>
        <!-- 侧边导航栏区域 -->
        <div v-if="role === 'teacher'">
            <el-menu-item
                :index="item.path"
                v-for="item in menu.menu1"
                :key="item.path"
                @click="clickMenu(item)"
            >
                <i :class="'el-icon-' + item.icon"></i>
                <span slot="title">{{ item.label }}</span>
            </el-menu-item>
        </div>
        <div v-if="role === 'student'">
            <el-menu-item
                :index="item.path"
                v-for="item in menu.menu2"
                :key="item.path"
                @click="clickMenu(item)"
            >
                <i :class="'el-icon-' + item.icon"></i>
                <span slot="title">{{ item.label }}</span>
            </el-menu-item>
        </div>
    </el-menu>
</template>

<script setup>
import { mapState } from 'vuex'

  // name: 'CommonAside',
const role = ref('teacher')
const menu= reactive({
        // 教师端循环项
        menu1: [
          {
            path: '/home/homepage',
            name: 'homepage',
            label: '首页',
            icon: 's-home',
          },
          {
            path: '/home/catalog_manage',
            name: 'catalog_manage',
            label: '目录管理',
            icon: 'view',
          },
          {
            path: '/home/question_manage',
            name: 'question_manage',
            label: '题库管理',
            icon: 'document',
          },
          {
            path: '/home/personal',
            name: 'personal',
            label: '个人中心',
            icon: 's-tools',
          }
        ],
        // 学生端循环项
        menu2: [
          {
            path: '/homepage',
            name: 'homepage',
            label: '首页',
            icon: 's-home',
          },
        ]
      })

    // 点击侧边栏对应方法
    clickMenu (item) {
      // console.log(item)
      if (this.$route.path !== item.path) {
        //this.$router.push({ path: item.path })
      }
      // this.$store.commit('changeTitle', { name: item.label })
    }
  // computed: {
  //   ...mapState(['token']),
  //   isCollapse () {
  //     return true
  //     // return this.$store.state.tab.isCollapse
  //   },
  // }
</script>

<style lang="scss" scoped>
//  .el-menu {
//   height: 100%;
//   border: none;
//   text-align: center;
//   h3 {
//     color: #ffffff;
//     text-align: center;
//   }
// }
//   .el-menu-vertical-demo:not(.el-menu--collapse) {
//    width: 200px;
//    min-height: 400px;
//  }
</style>