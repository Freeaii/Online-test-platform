<template>
   <div>
       <el-button @click="test1" type="primary">课程接口</el-button>
       <el-button @click="test1" type="primary">知识点接口</el-button>
       <el-button @click="test1" type="primary">题目接口</el-button>



       <el-button @click="test1" type="primary">请求题目接口</el-button>
       <el-button @click="test1" type="primary">删除题目接口</el-button>


    <!--wait-->
       <el-button @click="test1" type="primary">添加章节接口</el-button>
       <el-button @click="test1" type="primary">添加知识点接口</el-button>
       <el-button @click="test1" type="primary">导入题目接口</el-button>


    <!--添加题目-->
       <el-button @click="test1" type="primary">提交题目接口</el-button>
   </div>
</template>

<script setup>
    import axios from 'axios'
    function test1() {
        axios.get('/mchoice').then(res=>{
            console.log(res.data)
        })
    }
</script>

<style scoped>
    div{
        display: flex;
        flex-wrap: wrap;
    }
    button{
        font-size: 12px;
       padding: 10px;
        margin: 12px 0;
    }
</style>
