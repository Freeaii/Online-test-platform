<template>
  <el-card class="box-card">
    <template #header>
      <div class="change">
        <span>课程名:</span>
        <el-select v-model="options.value" placeholder="课程切换">
          <el-option
                  v-for="item in options.selects"
                  :key="item.course_id"
                  :label="item.cname"
                  :value="item.course_id"
          >
          </el-option>
        </el-select>
      </div>
      <div class="btn">
        <el-button @click="addQuestion">
          <el-icon>
            <circle-plus/>
          </el-icon>
          添加题目
        </el-button>
        <el-button>
          <el-icon>
            <folder-opened />
          </el-icon>
          导入题目
        </el-button>
      </div>
    </template>
    <question-style :menu="options.menu"></question-style>
    <question-style :menu="options.hard"></question-style>
    <div class="search">
      <span>搜索</span>
      <div class="input">
        <el-input placeholder="输入题目的题干关键字"></el-input>
      </div>
      <el-button>筛选</el-button>
    </div>
    <div class="space">
      <div class="text"><span>题目</span></div>
      <el-button type="text" size="medium">批量删除</el-button>
    </div>
    <div class="questions">
      <QuestionItem></QuestionItem>
    </div>
  </el-card>
</template>

<script setup>
import QuestionStyle from "../components/QuestionStyle.vue";
import QuestionItem from "../components/QuestionItem.vue";
import {reactive,onMounted} from 'vue';
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import https from "../../../../apis/axios";
const router = useRouter()
const store = useStore()
let options=reactive({
  menu: {
    title: "题 型",
    radios: ["单项选择题", "多项选择题", "判断题", "填空题", "简答题"],
  },
  hard:{
    title:'难度',
    radios:["简单",'普通','困难']
  },
  selects:[
    {
      value: 'Option1',
      label: '计算机科学与技术',
    },
    {
      value: 'Option2',
      label: '计算机网络与技术',
    }],
  value:"",
})

function addQuestion() {
  router.push({ path: "/add_question" });
}
onMounted(()=>{
  //获取课程列表
  https.get('/courses').then(res=>{
    //将课程列表载入selects数据
    options.selects=res.items
    //更新vuex中的课程信息
    options.value=res.items[0].course_id
    //将课程更新到vuex
    store.dispatch("changeCourse",options.value)
  })
})
</script>

<style lang="less" scoped>
.box-card {
  height: 100%;
  position: relative;
}

.btn {
  position: absolute;
  right: 20px;
  top: 3px;
}
.change{
  position: absolute;
  left: 20px;
  top: 3px;
  display: flex;
  align-items: center;
  span{
    font-size: 14px;
    margin-right: 5px;
  }
}
.search {
  display: flex;
}
span {
  margin-right: 24px;
  min-width: 40px;
}
.input {
  width: 350px;
  margin-right: 20px;
}
.space {
  display: flex;
  justify-content: space-between;
  height: 35px;
  padding: 2px 20px;
  border: 1px solid #d3d3d3;
  background: #f5f5f5;
  margin: 15px 0;
}
.text {
  padding: 6px 0;
}
</style>

