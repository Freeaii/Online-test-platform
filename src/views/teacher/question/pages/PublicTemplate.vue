<!--单项选择、多项选择、判断题组件-->
<template>
        <div class="multiple_choice">
            <!--插槽 -->
            <slot :name="style"></slot>

            <div class="general_arrange">
                <span class="general_width">难度</span>
                <el-select v-model="options.hard.hardValue" placeholder="请选择">
                    <el-option
                            v-for="item in options.hard.hardOption"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                    >
                    </el-option>
                </el-select>
            </div>
            <div class="general_arrange">
                <span class="general_width">答案解析</span>
                <el-input
                        :rows="8"
                        type="textarea"
                        placeholder="请输入答案解析"
                        v-model="options.answerParse"
                />
            </div>
            <div class="general_arrange">
                <span class="general_width">知识点</span>
                <div class="knowledge">
                    <el-cascader
                            placeholder="请选择知识点"
                            :options="options.knowledges.knowledgeOption"
                            filterable
                            v-model="options.knowledges.knowledgeValue"
                            style="width: 200px"
                    />
                </div>
            </div>
            <div class="general_arrange">
                <span class="general_width">题目标签</span>
                <div class="tags">
                    <el-tag
                            v-for="tag in options.tags.dynamicTags"
                            :key="tag"
                            closable
                            :disable-transitions="false"
                            @close="handleClose(tag)"
                    >
                        {{ tag }}
                    </el-tag>
                    <el-input
                            v-if="options.tags.inputVisible"
                            v-model="options.tags.inputValue"
                            class="input-new-tag"
                            size="mini"
                            ref="tagInput"
                            @keyup.enter="handleInputConfirm"
                            @blur="handleInputConfirm"
                    >
                    </el-input>
                    <el-button v-else class="button-new-tag" size="small" @click="showInput">添加新标签</el-button>
                </div>
            </div>
            <el-button class="save" @click="saveQuestion" type="primary">保存</el-button>
        </div>
</template>

<script setup>
    /*
    *此组件为公共组件，用于生成填空题
    *作者：文成
    *联系方式：1374977935@qq.com
    *制作日期：2021.12.9
    * */
    import {reactive, ref, nextTick, inject,provide,onMounted} from 'vue'
    import PubSub from 'pubsub-js'
    import axios from 'axios'

    //设置插槽名称
    let style=inject('addQuestionStyle')

   /*
   * 设置响应式数据
   * */
    const options=reactive({
        hard:{
            hardValue:'',
            hardOption:[
                {
                    value: '0~0.1',
                    label: '0~0.1',
                },
                {
                    value: '0.1~0.25',
                    label: '0.1~0.25',
                },
                {
                    value: '0.25~0.45',
                    label: '0.25~0.45',
                },
                {
                    value: '0.45~0.6',
                    label: '0.45~0.6',
                },
                {
                    value: '0.6~1',
                    label: '0.6~1',
                },
            ]
        },//难度等级
        answerParse:"",//答案解析
        knowledges:{
            knowledgeValue:"",
            //类似这种结构
            knowledgeOption:[
                {
                    value: '第一章 计算机组成原理',
                    label: '第一章 计算机组成原理',
                    children: [
                        {
                            value: 'dialog',
                            label: 'Dialog',
                        },
                    ],
                },
                {
                    value: '第二章 网络是怎样连接的',
                    label: '第二章 网络是怎样连接的',
                    children: [
                        {
                            value: 'dialog',
                            label: 'Dialog',
                        },
                    ],
                },
                {
                    value: '第三章 数据库的基本使用',
                    label: '第三章 数据库的基本使用',
                    children: [
                        {
                            value: 'dialog',
                            label: 'Dialog',
                        },
                    ],
                }
            ]
        },//知识点
        tags:{//标签
            dynamicTags: [],
            inputVisible: false,
            inputValue: '',
        },
    })


    /*
    * 设置tags题目标签逻辑
    * */
    let tagInput=ref(null)

    //删除当前tag
    function handleClose(tag) {
        options.tags.dynamicTags.splice(options.tags.dynamicTags.indexOf(tag), 1)
    }

    //显示输入框，并且聚焦
    function showInput() {
        options.tags.inputVisible = true
        nextTick(()=>{
            tagInput.value.$refs.input.focus()
        })
    }

    //保存tag的编辑
    function handleInputConfirm() {
        const inputValue = options.tags.inputValue
        if (inputValue) {
            options.tags.dynamicTags.push(inputValue)
        }
        options.tags.inputVisible = false
        options.tags.inputValue = ''
    }

    /*
    * 保存按钮的逻辑
    * */
   function saveQuestion() {
        let {question,hard,answerParse,knowledges,tags}=options
        PubSub.publish('collector',(data)=>{
            //发送请求，保存题目
            axios.post('/api/schoice',{
                style:style.value,
                question,
                ...data,
                hard: hard.hardValue,
                knowledges: knowledges.knowledgeValue,
                answerParse,
                tags:tags.dynamicTags
            }).then(res=>{
                //提交成功逻辑
                console.log('success')
            },({response})=>{
                //提交失败逻辑

            })
        })
    }

    /*
    * 组件挂载完毕后的逻辑
    * */
</script>

<style lang="less" scoped>
    //公用样式
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
    .general_width_long{
        width: 240px;
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
    .multiple_choice{
        display: flex;
        flex-flow: column;
        position: relative;
        padding: 8px 12px;
        text-align: left;
    }
    .svg_location{
        position: absolute;
        right: -5px;
        top: -8px;
    }
    .save{
        position: absolute;
        left: 50%;
        bottom: -50px;
        width: 80px;
        height: 30px;
    }
    .select_li{
        height: 20px;
        width: 200px;
        position: relative;
        border: 1px solid #d2d3d4;
        margin-bottom: 4px;
        color: #909399;
        font-size: 14px;
    }
    // elements中tags样式
    .el-tag + .el-tag {
        margin-left: 10px;
    }
    .button-new-tag {
        margin-left: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
    }
</style>
