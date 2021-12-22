<template>
    <div>
        <div class="general_arrange">
            <span class="general_width">题目</span>
            <el-input v-model="options.question" placeholder="请输入问题" />
        </div>
        <div class="general_arrange general_space_left">
            <button class="button_uploading">本地上传音频</button>
            <button class="button_uploading">睿课云盘上传视频</button>
            <p>查看上传要求</p>
        </div>
        <ul class="options">
            <li class="general_arrange" v-for="(item,index) in options.selects" :key="item.option" style="position: relative">
                <span class="general_width">{{item.option}}.</span>
                <el-input placeholder="请输入选项" :value="item.describe" v-model="item.describe"/>
                <svg v-if="index===options.selects.length-1&&index>=2" @click="removeKnowledge(item)" t="1638968214056" class="icon svg_location" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4648" width="16" height="16"><path d="M0 0h1024v1024H0V0z" fill="#202425" opacity=".01" p-id="4649"></path><path d="M989.866667 512c0 263.918933-213.947733 477.866667-477.866667 477.866667S34.133333 775.918933 34.133333 512 248.081067 34.133333 512 34.133333s477.866667 213.947733 477.866667 477.866667z" fill="#FF7744" p-id="4650"></path><path d="M221.866667 512A51.2 51.2 0 0 1 273.066667 460.8h477.866666a51.2 51.2 0 0 1 0 102.4H273.066667A51.2 51.2 0 0 1 221.866667 512z" fill="#FFFFFF" p-id="4651"></path></svg>
            </li>
        </ul>
        <div class="add_options general_space_left general_space_bottom">
            <svg @click="addSelect" t="1638965887634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2337" width="30" height="30"><path d="M801.171 483.589H544V226.418c0-17.673-14.327-32-32-32s-32 14.327-32 32v257.171H222.83c-17.673 0-32 14.327-32 32s14.327 32 32 32H480v257.17c0 17.673 14.327 32 32 32s32-14.327 32-32v-257.17h257.171c17.673 0 32-14.327 32-32s-14.327-32-32-32z" fill="#bfbfbf" p-id="2338"></path></svg>
        </div>
        <div class="general_arrange">
            <span class="general_width general_label">答案</span>
            <ul class="general_arrange_flex">
                <li @click="changeAnswer(item.option)" v-for="item in options.selects" :key="item.option">
                    <el-button v-show="style.style==='多项选择题'" class="general_button" :type="options.answer.includes(item.option)?'primary':null">{{item.option}}</el-button>
                    <el-button v-show="style.style==='单项选择题'" class="general_button" :type="options.answer===item.option?'primary':null">{{item.option}}</el-button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    /*
    *此组件为公共组件，用于生成单项选择题和多项选择题
    *作者：文成
    *联系方式：1374977935@qq.com
    *制作日期：2021.12.9
    * */
    import {reactive,onMounted,onUnmounted} from 'vue'
    import {removeElement,majuscule} from "../../../../utils/arr";
    import PubSub from 'pubsub-js'

    /*
    * 接收父组件传送过来的props
    * */
    let style=defineProps({
        style:{
            type:String,
            required:true
        }
    })

    /*
    * 初始化响应式数据
    * */
    const options=reactive({
        question:"",
        selects:[//选项
            {
                option:'A',
                describe:''
            },
            {
                option:'B',
                describe:''
            },
            {
                option:'C',
                describe:''
            },
            {
                option:'D',
                describe:''
            }
        ],
        answer:style.style==='单项选择题'?"":[]
    })

    /*
    * 组件挂载完毕后的钩子
    * */
    onMounted(()=>{
        /*
        * 订阅消息，接收回调函数data，并且将此组件的部分数据传入作为形参
        * */
        PubSub.subscribe('collector',(msgName,data)=>{
            data({
                question:options.question,
                selects:options.selects,
                answer:style.style==='单项选择题'?options.answer:options.answer,

            })
        })
    })

    /*
    * 组件销毁的钩子
    * */
    onUnmounted(()=>{
        //取消订阅
        PubSub.unsubscribe('collector')
    })

    /*
    * 更改当前题目的选择题答案，如果当前为单项选择，直接替换答案
    * 如果为多项选择并且答案已经存在，则取消该选项，否则添加进入多项选择题答案
    * */
    function changeAnswer(value){
        if(style.style==="单项选择题"){
            options.answer=value
        }else {
            if(options.answer.includes(value)){
                removeElement(options.answer,value)
            }else {
                options.answer.push(value)
            }
        }
    }


    /*
    * 添加一个选项，majuscule函数主要用于，找出现在追后一个选项的字母，生成他的下一个大写字母
    * */
    function addSelect(){
        let finalSelect=options.selects[options.selects.length-1].option
        let nextAlphabet=majuscule(finalSelect)
        options.selects.push({
            option:nextAlphabet,
            describe:''
        })
    }

    /*
    * 删除最后一个选择题选项
    * */
    function removeKnowledge(value) {
       removeElement(options.selects,value)
    }
</script>

<style lang="less" scoped>
    .general_arrange{
        display: flex;
        align-items: center;
        margin-bottom: 12px;
    }
    .general_arrange_flex{
        display: flex;
        align-items: center;
    }
    .general_width{
        flex-shrink: 0;
        width: 60px;
    }
    .general_space_bottom{
        margin-bottom: 12px;
    }
    .general_space_left{
        margin-left: 60px;
    }
    .general_label{
        position: relative;
        &::before{
            content: '*';
            color: red;
            position: absolute;
            line-height: 22px;
            right: 50px;
        }
    }
    .add_options{
        width: 40px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px dashed #c3c4c6;
        cursor: pointer;
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
    .svg_location{
        position: absolute;
        right: -5px;
        top: -8px;
    }
    .button_uploading{
        height: 25px;
        border: 1px solid #f1f2f5;
        background-color: #ffffff;
        border-radius: 4px;
        margin-right: 12px;
    }
    span{
        text-align: center;
    }
    p{
        font-size: 12px;
    }
    li{
        list-style: none;
    }
    ul{
        margin: 0;
        padding: 0;
    }
</style>
