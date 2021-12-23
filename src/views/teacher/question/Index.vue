<template>
  <el-breadcrumb :separator-icon="options.ArrowRight" class="bread">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>题库</el-breadcrumb-item>
  </el-breadcrumb>

  <div class="container">
    <div class="left">
      <div class="icon">
        <el-icon size="18">
          <search />
        </el-icon>
      </div>
      <el-tabs v-model="options.activeName" class="tabs">
        <el-tab-pane name="first" class="tab-pane" label="知识点">
          <div class="btns">
            <el-button>添加章节</el-button>
            <el-button>添加知识点</el-button>
            <el-button>导出</el-button>
          </div>
          <el-tree :data="options.data" :props="options.defaultProps" />
          <Api></Api>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="right">
      <!-- 右侧子路由出口 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ArrowRight } from "@element-plus/icons";
import Api from './apiTest/Api.vue'
import {reactive} from 'vue'
let options=reactive({
  activeName: "first",
  ArrowRight,
  data: [
    {
      label: "网络教育学院",
      children: [
        {
          label: "Level one 1",
          children: [
            {
              label: "Level two 1-1",
              children: [
                {
                  label: "Level three 1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "Level one 2",
          children: [
            {
              label: "Level two 2-1",
              children: [
                {
                  label: "Level three 2-1-1",
                },
              ],
            },
            {
              label: "Level two 2-2",
              children: [
                {
                  label: "Level three 2-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "Level one 3",
          children: [
            {
              label: "Level two 3-1",
              children: [
                {
                  label: "Level three 3-1-1",
                },
              ],
            },
            {
              label: "Level two 3-2",
              children: [
                {
                  label: "Level three 3-2-1",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  defaultProps: {
    children: "children",
    label: "label",
  },
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 10px;
}
.left {
  min-width: 300px;
  max-width: 360px;
  height: 100%;
  position: relative;
  padding: 1px 15px;
  flex-shrink: 0;
  border: 1px solid #d3d3d3;
  border-right: none;
}
.icon {
  position: absolute;
  top: 12px;
  right: 10px;
  color: #c0c0c0;
}
.right {
  flex: 1;
  min-width: 640px;
  height: 100%;
  border: 1px solid #d3d3d3;
}
.btns {
  margin-bottom: 15px;
}
</style>
