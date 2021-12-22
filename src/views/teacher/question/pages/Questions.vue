<template>
    <div class="question">
      <div class="add_question">
          <div class="add_question_head">
            <span>添加题目</span>
            <span class="general_cur" @click="back">返回上一级</span>
          </div>
          <div class="content">
              <QuestionStyle :menu="menu" :getStyle="getQueStyle"></QuestionStyle>

              <AddQuestion>
                <!-- 根据style返回的数据发送模版-->
              </AddQuestion>
          </div>
      </div>
    </div>
</template>

<script setup>
  import {reactive,ref,provide} from 'vue'
  import QuestionStyle from '../components/QuestionStyle.vue'
  import AddQuestion from './AddQuestion.vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  let menu={
      title:'题 型',
      radios:['单项选择题','多项选择题','判断题','填空题','简答题','完形填空','翻译','作文','阅读理解']
  }
  let style=ref(menu.radios[0])

  provide('addQuestionStyle',style)

  //定义回调函数，获取questionStyle中的选项
    function getQueStyle(value) {
        style.value=value
    }

    //返回上一级
    function back() {
        router.push("/question_manage")
    }
</script>

<style lang="less" scoped>
  .question{
    display: flex;
  }
  .add_question{
    width: 100%;
    min-height: 1000px;
  }
  .general_cur{
      cursor: pointer;
  }
  .add_question_head{
    display: flex;
    padding: 10px;
    justify-content: space-between;
    background-color: #f1f2f5;
      font-size: 14px;
  }
  .content{
        padding: 12px;
  }
</style>
