<template>
    <el-menu
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
    >
        <div v-if="role == 'teacher'">
            <el-menu-item
                v-for="item in menu.menu1"
                :index="item.path"
                :key="item.path"
            >
            <el-icon><menu-icon /></el-icon>
                {{ item.label }}
            </el-menu-item>
        </div>
        <div v-if="role.value === 'student'">
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
import { ref, reactive } from 'vue'

  // name: 'CommonAside',
const collapse = ref(false)  
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

</script>

<style lang="scss" scoped>
</style>