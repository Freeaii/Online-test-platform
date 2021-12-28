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
       <el-button @click="test10" type="primary">提交题目接口</el-button>
   </div>
</template>

<script setup>
    import https from '@/apis/axios'
    function test1() {
        https.get('/mchoice').then(res=>{
            console.log(res.data)
        })
    }
    let data={
        style:"单项选择题",
        content:{
            question:"xxxxxxxxxxxxxx",
            optionsA:"123",
            optionsB:"1231",
            optionsC:"1232",
            optionsD:"1233",
            answer:"A",
            analysis:"不知道什么分析",
            degree:"简单",
            con_id:"1111111"
        }
    }
    function test10() {
        https.post('/',data).then(res=>{
            console.log(res)
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
