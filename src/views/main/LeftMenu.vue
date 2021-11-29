<template>
    <el-menu router :default-active="activeIndex">
        <el-menu-item
            v-for="(item,index) in menuData[user.role]"
            :index="item.path"
            :key="item.path"
            :route="item.path"
        >
            <el-icon>
                <component :is="item.icon" />
            </el-icon>
            <template #title>{{item.label}}</template>
        </el-menu-item>
    </el-menu>
</template>

<script setup>
import {ref, reactive, inject, defineProps} from 'vue'

const user = inject('user')
const activeIndex = ref("/")
const menuData = reactive({
    // 访客
    guest:[
        {
            path: "/",
            name: "homepage",
            label: "首页",
            icon: "HomeFilled",
        }
    ],
    // 教师端循环项
    teacher: [
        {
            path: "/",
            name: "homepage",
            label: "首页",
            icon: "HomeFilled",
        },
        {
            path: "/question_manage",
            name: "question_manage",
            label: "题库管理",
            icon: "Document",
        },
        {
            path: "/exercise_manage",
            name: "exercise_manage",
            label: "训练管理",
            icon: "Collection",
        },
        {
            path: "/personal",
            name: "personal",
            label: "个人中心",
            icon: "UserFilled",
        },
    ],
    // 学生端循环项
    student: [
        {
            path: "/",
            name: "homepage",
            label: "首页",
            icon: "HomeFilled",
        },
        {
            path: "/exercise",
            name: "exercise",
            label: "训练参与",
            icon: "Document",
        },    
        {
            path: "/personal",
            name: "personal",
            label: "个人中心",
            icon: "UserFilled",
        },
    ],
    // 管理员菜单
    admin: [
        {
            path: "/",
            name: "homepage",
            label: "首页",
            icon: "HomeFilled",
        },
        {
            path: "/course_manage",
            name: "course_manage",
            label: "课程管理",
            icon: "Document",
        },
        {
            path: "/exercise_report",
            name: "exercise_report",
            label: "训练情况",
            icon: "Document",
        },
        {
            path: "/user_manage",
            name: "user_manage",
            label: "用户管理",
            icon: "Collection",
        },
        {
            path: "/personal",
            name: "personal",
            label: "个人中心",
            icon: "UserFilled",
        },
    ],

});
</script>
