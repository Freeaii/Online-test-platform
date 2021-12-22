<template>
    <div class="short_question">
        <div v-for="(item,index) in options.shortQuestions" :key="index">
            <div class="question" style="position: relative">
                <span>题{{index+1}}</span>
                <el-input
                        v-model="item.question"
                        autosize
                        type="textarea"
                        placeholder="输入题目"
                />
                <svg v-if="index>0" @click="removeShortQuestion(index)" t="1638968214056" class="icon svg_location" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4648" width="16" height="16"><path d="M0 0h1024v1024H0V0z" fill="#202425" opacity=".01" p-id="4649"></path><path d="M989.866667 512c0 263.918933-213.947733 477.866667-477.866667 477.866667S34.133333 775.918933 34.133333 512 248.081067 34.133333 512 34.133333s477.866667 213.947733 477.866667 477.866667z" fill="#FF7744" p-id="4650"></path><path d="M221.866667 512A51.2 51.2 0 0 1 273.066667 460.8h477.866666a51.2 51.2 0 0 1 0 102.4H273.066667A51.2 51.2 0 0 1 221.866667 512z" fill="#FFFFFF" p-id="4651"></path></svg>
            </div>
            <div class="answer">
                <span>答案</span>
                <el-input
                        v-model="item.answer"
                        autosize
                        type="textarea"
                        placeholder="输入答案"
                />
            </div>
            <hr class="dashed">
        </div>
        <div class="add_options">
            <svg @click="addShortQuestion" t="1638965887634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2337" width="30" height="30"><path d="M801.171 483.589H544V226.418c0-17.673-14.327-32-32-32s-32 14.327-32 32v257.171H222.83c-17.673 0-32 14.327-32 32s14.327 32 32 32H480v257.17c0 17.673 14.327 32 32 32s32-14.327 32-32v-257.17h257.171c17.673 0 32-14.327 32-32s-14.327-32-32-32z" fill="#bfbfbf" p-id="2338"></path></svg>
        </div>
    </div>

</template>

<script setup>
    /*
    *此组件为公共组件，用于生成填空题
    *作者：文成
    *联系方式：1374977935@qq.com
    *制作日期：2021.12.9
    * */
    import {reactive} from 'vue'

    /*
    * 设置响应式数据
    * */
    let options=reactive({
        shortQuestions:[
            {
                question:"",
                answer:""
            }
        ]
    })

    /*
    * 添加一组简答题
    * */
    function addShortQuestion() {
        options.shortQuestions.push({
            question:"",
            answer:""
        })
    }
    /*
    * 移除当前简答题
    * */
    function removeShortQuestion(index) {
        options.shortQuestions.splice(index,1)
    }
</script>

<style scoped>
    span{
        flex-shrink: 0;
        width: 60px;
        text-align: center;
    }
    .question,.answer{
        display: flex;
        margin-bottom: 12px;
    }
    hr {
        margin-left: 60px;
        border-top: 2px dashed var(--el-border-color-base);
    }
    .add_options{
        margin:0 0 12px 60px;

        width: 40px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px dashed #c3c4c6;
        cursor: pointer;
    }
    .svg_location{
        position: absolute;
        right: -5px;
        top: -8px;
    }
</style>
