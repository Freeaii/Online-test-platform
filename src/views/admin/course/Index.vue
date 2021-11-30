<template>
    <div style="display:flex; justify-content: space-between;">
      <el-button type="primary" @click.prevent="addCourse()">添加课程</el-button>
      <el-input  v-model="search" placeholder="Type to search" clearable style="max-width: 300px;"/>
    </div>
    <el-table :data="courses" stripe style="width: 100%">
      <el-table-column type="index" label="#"></el-table-column>
      <el-table-column prop="code" label="课程代码" width="180" />
      <el-table-column prop="name" label="课程名" width="180" />
      <el-table-column prop="teacher" label="任课教师">
        <template #default="scope">
          <span style="margin-left: 10px">{{ scope.row.teacher?.name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="descripttion" label="课程描述" />
      <el-table-column align="right" label="操作">
        <template #default="scope">
          <el-button @click.prevent = "editCourse(scope.$index, scope.row)">修改</el-button>
          <el-button type="danger" @click.prevent = "deleteCourse(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:currentPage="pagination.page"
      :page-sizes="[25, 50, 100]"
      :page-size="pagination.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
</template>

<script setup>
import {ref, reactive, inject, onMounted} from 'vue'

// 注入当前用户
const axios = inject('axios')

const courses = ref([])
const pagination = reactive({
  total:1,
  page: 1,
  size: 50
})
const search = ref()


onMounted(()=>{
  queryCourses()
})

function handleSizeChange(size){
  pagination.size = size
  queryCourses()
}

function handleCurrentChange(currentPage){
  pagination.page = currentPage
  queryCourses()
}

/** 查询课程 */
function queryCourses(){
  axios.get("/courses",{params:{
    page: pagination.page, 
    size: pagination.size
  }}).then(response =>{
    pagination.total = response.total
    pagination.page = response.page
    pagination.size = response.size

    courses.value = response.items
  })
}

/** 添加课程 */
function addCourse(){
  console.log('add course')
}

/** 修改课程 */
function editCourse(index, row){
  console.log(index,row)
}

/** 删除课程 */
function deleteCourse(index, row){
  console.log(index,row)
}

</script>

<style lang="scss" scoped>
</style>