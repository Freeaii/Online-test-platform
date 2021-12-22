<template>
    <div>
        <div v-for="(item,index) in questions.judges">
            <div class="general_arrange" style="position: relative">
                <span class="general_width">题{{index+1}}</span>
                <el-input placeholder="请输入选项" v-model="item.describe"/>
                <svg v-if="index>0" @click="removeQuestion(index)" t="1638968214056" class="icon svg_location" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4648" width="16" height="16"><path d="M0 0h1024v1024H0V0z" fill="#202425" opacity=".01" p-id="4649"></path><path d="M989.866667 512c0 263.918933-213.947733 477.866667-477.866667 477.866667S34.133333 775.918933 34.133333 512 248.081067 34.133333 512 34.133333s477.866667 213.947733 477.866667 477.866667z" fill="#FF7744" p-id="4650"></path><path d="M221.866667 512A51.2 51.2 0 0 1 273.066667 460.8h477.866666a51.2 51.2 0 0 1 0 102.4H273.066667A51.2 51.2 0 0 1 221.866667 512z" fill="#FFFFFF" p-id="4651"></path></svg>
            </div>
            <div class="general_arrange">
                <span class="general_width">正误</span>
                <el-radio v-model="item.judge" label="false">错误</el-radio>
                <el-radio v-model="item.judge" label="true">正确</el-radio>
            </div>
        </div>
        <div class="add_options general_space_left general_space_bottom">
            <svg @click="addQuestion" t="1638965887634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2337" width="30" height="30"><path d="M801.171 483.589H544V226.418c0-17.673-14.327-32-32-32s-32 14.327-32 32v257.171H222.83c-17.673 0-32 14.327-32 32s14.327 32 32 32H480v257.17c0 17.673 14.327 32 32 32s32-14.327 32-32v-257.17h257.171c17.673 0 32-14.327 32-32s-14.327-32-32-32z" fill="#bfbfbf" p-id="2338"></path></svg>
        </div>
    </div>

</template>

<script setup="">
    /*
    *此组件为公共组件，用于生成填空题
    *作者：文成
    *联系方式：1374977935@qq.com
    *制作日期：2021.12.9
    * */
    import {ref, reactive, onMounted, onUnmounted} from 'vue'
    import PubSub from "pubsub-js";

    /*
    * 设置响应式数据
    * */
    let questions=reactive({
        judges:[
            {
                describe:"",
                judge:""
            }
        ]
        })
    /*
    * 添加一组判断题
    * */
    function addQuestion() {
        questions.judges.push({
            describe:"",
            judge:""
        })
    }

    /*
    * 删减判断题组
    * */
    function removeQuestion(index) {
        if(questions.judges.length>1){
            questions.judges.splice(index,1)
        }
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

<style scoped>
    .general_width{
        flex-shrink: 0;
        width: 60px;
    }
    .general_arrange{
        display: flex;
        align-items: center;
        margin-bottom: 12px;
    }
    .svg_location{
        position: absolute;
        right: -5px;
        top: -8px;
    }
    .general_space_bottom{
        margin-bottom: 12px;
    }
    .general_space_left{
        margin-left: 60px;
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
    span{
        text-align: center;
        font-size: 14px;
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
