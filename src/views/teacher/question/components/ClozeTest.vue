<template>
    <div class="cloze_test">
        <span>内容</span>
        <MyEditor></MyEditor>
    </div>
    <div class="add_button">
        <el-button @click="addQuestion" class="general_space">插入题目</el-button>
    </div>
    <div class="cloze_test" v-for="(item,index) in options.questions">
    <!--添加问题:如果有必要，可以抽离成组件，使多种题型复合-->
        <span>{{item.serial}}.</span>
        <div class="question_option">
            <div class="options">
                <ul>
                    <li v-for="select in item.selects">{{select.option}}.<el-input v-model="select.content" :placeholder="'输入选项'+select.option" /></li>
                </ul>
                <div class="add_options">
                    <svg @click="addSelect(index)" t="1638965887634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2337" width="30" height="30"><path d="M801.171 483.589H544V226.418c0-17.673-14.327-32-32-32s-32 14.327-32 32v257.171H222.83c-17.673 0-32 14.327-32 32s14.327 32 32 32H480v257.17c0 17.673 14.327 32 32 32s32-14.327 32-32v-257.17h257.171c17.673 0 32-14.327 32-32s-14.327-32-32-32z" fill="#bfbfbf" p-id="2338"></path></svg>
                </div>
            </div>
            <div class="answer">
                <ul>
                    <li v-for="select in item.selects"><el-button :type="item.answer===select.option?'primary':null" @click="changeAnswer(index,select.option)" class="general_button">{{select.option}}</el-button></li>
                </ul>
            </div>
            <hr>
        </div>
    </div>
</template>

<script setup>
    /*
   *此组件为公共组件，用于生成完形填空题型
   *作者：文成
   *联系方式：1374977935@qq.com
   *制作日期：2021.12.9
   * */
    import MyEditor from './MyEditor.vue'
    import {reactive} from 'vue';
    import {majuscule} from "../../../../utils/arr";

    /*
    * 初始化响应式数据
    * */
    const options=reactive({
        questions:[
            {
                serial:1,
                selects:[
                    {
                        option:'A',
                        content:'apple'
                    },
                    {
                        option:'B',
                        content:'banana'
                    },
                    {
                        option:'C',
                        content:'blueberry'
                    },
                    {
                        option:"D",
                        content:'strawberry'
                    }
                ],
                answer:'A'
            },
        ]
    })

    /*
    * 添加一组题目和答案
    * */
    function addQuestion() {
        options.questions.push({
            serial:options.questions.length+1,
            selects:[
                {
                    option:'A',
                    content:''
                },
                {
                    option:'B',
                    content:''
                },
                {
                    option:'C',
                    content:''
                },
                {
                    option:"D",
                    content:''
                }
            ],
            answer:''
        },)
        //通知WangEditor在编辑内容中插入一个相应的题目占位

    }

    /*
    * 为目标题目添加一个选项
    * */
    function addSelect(index) {
        let finalSelect=options.questions[index].selects[options.questions[index].selects.length-1].option
        let nextAlphabet=majuscule(finalSelect)
        options.questions[index].selects.push({
            option:nextAlphabet,
           content: ""
        })
    }


    /*
    * 改变目标题目的答案
    * */
    function changeAnswer(index,option) {
        options.questions[index].answer=option
    }

</script>

<style scoped>
    .cloze_test{
        display: flex;
        margin-bottom: 12px;
    }
    .add_button{
        margin:0 0 12px 60px;
    }
    .options{
        display: flex;
        margin-bottom: 12px;
    }
    .general_button{
        width: 30px;
        height: 30px;
        border-radius: 15px;
        margin:0 12px 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .question_option{
        width: 100%;
    }
    .add_options{
        width: 40px;
        height: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px dashed #c3c4c6;
        cursor: pointer;
    }
    span{
        width: 60px;
        text-align: center;
        flex-shrink: 0;
    }
    li{
        list-style: none;
        display: flex;
        align-items: center;
        margin-right: 12px;
    }
    hr{
        border-top: 1px dashed var(--el-border-color-base);
    }
    ul{
        margin: 0;
        padding: 0;
        display: flex;
    }
</style>
