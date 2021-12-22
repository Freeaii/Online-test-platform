<template>
    <div>
        <div style="display: flex">
            <span class="general_width">题目</span>
            <MyEditor :data="{editorFuns:options.editorFuns,finalIndex:options.answers[options.answers.length-1]}" :answers="options.answers"></MyEditor>
        </div>
        <div class="uploading">
            <button class="button_uploading">本地上传音频</button>
            <button class="button_uploading">睿课云盘上传视频</button>
            <p>查看上传要求</p>
        </div>
        <div style="display: flex;margin: 12px 0">
            <span>答案</span>
            <ul>
                <li class="fill_li" v-for="(item,index) in options.answers" :key="index">
                    <div v-if="item.answer instanceof Array " v-for="(an,num) in item.answer" class="general_flex">
                        <p>#{{item.subscript}}-{{an.subscript}}、</p>
                        <el-input
                                v-model="an.answer"
                                class="general_input"
                                placeholder="输入答案"
                        />
                    </div>
                    <div v-else class="general_flex">
                        <p>#{{item.subscript}}、</p>
                        <el-input
                                v-model="item.answer"
                                class="general_input"
                                placeholder="输入答案"
                        />
                    </div>
                </li>
            </ul>
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
    import {onMounted, onUnmounted, reactive, ref, watch} from 'vue'
    import MyEditor from './MyEditor.vue'
    import {reg} from "../../../../utils/reg";
    import PubSub from "pubsub-js";

    /*
    * 设置此组件的响应式数据
    * */
    let options=reactive({
        question_HTML:"",
        answers:[],
        input_answer:"",
        editorFuns:{
            changeQuestionHTML,
            getAnswerInsert,
        },
    })

    /*
    * 设置一个回调拿到editor中的HTML
    * */
    function changeQuestionHTML(value){
        //存HTML
        options.question_HTML=value

        //筛选内容，查询是否有所删减
       let inserts=reg(value)
    }

    /*
    * 设置一个回调拿到插入的数据
    * */
    function getAnswerInsert(value) {
        switch (value) {
            case '有序插入':
                options.answers.push({
                    subscript:options.answers.length+1,
                    answer:''
                })
                break;
            case '无序插入':
                //判断上一个空位是否为有序 否
                if(options.answers.length===0){
                    options.answers.push({
                        subscript:options.answers.length+1,
                        answer:[
                            {
                                subscript:1,
                                answer:''
                            }
                        ]
                    })
                }else {
                    let {answer}=options.answers[options.answers.length-1]
                    if(answer instanceof Array){//是数组就直接插入
                        answer.push({
                            subscript:answer.length+1,
                            answer:''
                        })
                    }else {
                        options.answers.push({
                            subscript:options.answers.length+1,
                            answer:[//不是数组就直接生成个数组
                                {
                                    subscript:1,
                                    answer:''
                                }
                            ]
                        })
                    }
                }
                break;
            default:
                break;
        }
        //通知编辑器加入标识符

    }

    /*
   * 组件挂载完毕后的钩子
   * */
    onMounted(()=>{
        /*
        * 订阅消息，接收回调函数data，并且将此组件的部分数据传入作为形参
        * */
        PubSub.subscribe('collector',(msgName,data)=>{
            data(questions)
        })

    })

    /*
    * 组件销毁的钩子
    * */
    onUnmounted(()=>{
        //取消订阅
        PubSub.unsubscribe('collector')
    })
</script>

<style lang="less" scoped>
    .general_input{
        width: 80px;
        height: 30px;
        margin-right: 12px;
    }
    .general_flex{
        display: flex;
        align-items: center;
    }
    .fill_answers{
        margin-left: 60px;
    }
    .answers{
        display: flex;
        align-items: center;
        min-height: 30px;
        padding: 0 6px;
        margin:0 12px 12px 0;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        p{
            font-size: 12px;
            margin-right: 4px;
        }
    }
    .uploading{
        display: flex;
        align-items: center;
        margin:12px 0 0 60px;
        p{
            font-size: 12px;
        }
    }
    .button_uploading{
        height: 25px;
        border: 1px solid #f1f2f5;
        background-color: #ffffff;
        border-radius: 4px;
        margin-right: 12px;
    }
    .fill_li{
        display: flex;
        align-items: center;
        margin:0 6px 12px 0
    }
    span{
        flex-shrink: 0;
        text-align: center;
        width: 60px;
    }
    *{
        margin: 0;
        padding: 0;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
    }
</style>
