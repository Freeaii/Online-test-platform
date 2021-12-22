<template>
    <div class="reading">
        <div class="add_article">
            <span>文章</span>
            <MyEditor></MyEditor>
        </div>
        <div class="selects" v-for="(item,index) in options.choices" :key="index" style="position: relative">
<!--            <svg @click="removeQuestion(index)" t="1638968214056" class="icon svg_location" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4648" width="16" height="16"><path d="M0 0h1024v1024H0V0z" fill="#202425" opacity=".01" p-id="4649"></path><path d="M989.866667 512c0 263.918933-213.947733 477.866667-477.866667 477.866667S34.133333 775.918933 34.133333 512 248.081067 34.133333 512 34.133333s477.866667 213.947733 477.866667 477.866667z" fill="#FF7744" p-id="4650"></path><path d="M221.866667 512A51.2 51.2 0 0 1 273.066667 460.8h477.866666a51.2 51.2 0 0 1 0 102.4H273.066667A51.2 51.2 0 0 1 221.866667 512z" fill="#FFFFFF" p-id="4651"></path></svg>-->
            <ChoiceQuestion :style="'单项选择题'"></ChoiceQuestion>
            <hr>
        </div>
        <el-button @click="addQuestion" class="general_space">添加题目</el-button>
    </div>
</template>

<script setup>
    /*
    *此组件为公共组件，用于生成填空题
    *作者：文成
    *联系方式：1374977935@qq.com
    *制作日期：2021.12.9
    * */
    import MyEditor from './MyEditor.vue'
    import ChoiceQuestion from '../components/ChoiceQuestion.vue'

    import {reactive} from 'vue';

    /*
    * 设置响应式数据
    * */
    const options=reactive({
        choices:[
            {

            },
        ]
    })

    /*
    * 添加一个单项选择组件
    * */
    function addQuestion() {
        options.choices.push({})
    }

    /*
    * 移除一组单项选择题组件
    * */
    function removeQuestion(index) {
        options.choices.splice(index,1)
    }
</script>

<style scoped>
    .add_article{
        display: flex;
        margin-bottom: 12px;
    }
    .general_space{
        margin:0 0 12px 60px;
    }
    .svg_location{
        position: absolute;
        right: -5px;
        top: -8px;
        z-index: 99;
    }
    span{
        flex-shrink: 0;
        width: 60px;
        text-align: center;
    }
    hr {
        margin-left: 60px;
        border-top: 2px dashed var(--el-border-color-base);
    }
</style>
