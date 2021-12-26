<template>
    <div class="choice">
        <div class="icon">
            <el-icon class="general-icon"><edit /></el-icon>
            <el-icon class="general-icon"><close /></el-icon>
        </div>
        <span class="general-color">【单项选择题】</span>
        <div class="title general-margin">
            <div class="general-flex"><i/>当进行Excel2010中的分栏汇总时，必须事先按分类字段对数据进行()</div>
        </div>
        <div class="selects general-left">
            <div class="select">
                <el-radio label="A">A、</el-radio>
                <div class="general-font">测试题目</div>
            </div>
            <div class="select">
                <el-radio label="B">B、</el-radio>
                <div class="general-font">测试题目</div>
            </div>
            <div class="select">
                <el-radio label="C">C、</el-radio>
                <div class="general-font">测试题目</div>
            </div>
            <div class="select">
                <el-radio model-value="D" label="D">D、</el-radio>
                <div class="general-color general-font">测试题目</div>
            </div>
        </div>
        <el-divider border-style="dashed" class="general-margin"></el-divider>
        <div class="answer">
            <span>参考答案 <strong>D</strong></span>
        </div>
        <el-divider border-style="dashed" class="general-margin"></el-divider>
        <div class="answer_parse">
            <span>答案解析</span>
            <span>......</span>
        </div>
        <el-divider border-style="dashed" class="general-margin"></el-divider>
        <div class="knowledge">
            <span>知识点</span>
            <el-button class="general-left">第一章 计算机基础与运用</el-button>
        </div>
    </div>
</template>

<script setup>
    import {reactive} from 'vue';
    let options=reactive({
        answer:'D'
    })
</script>

<style lang="less" scoped>
    .general-left{
        margin-left: 10px;
    }
    .choice{
        position: relative;
    }
    .selects{
        display: flex;
        flex-flow: column;
    }
    .general-color{
        color: #409eff;
    }
    .general-font{
        font-size: 14px;
        display: flex;
        align-items: center;
    }
    .general-margin{
        margin: 12px 0;
    }
    .select{
        display: flex;
    }
    .general-flex{
        display: flex;
        align-items: center;
        i{
            display: block;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            border: 2px solid #409eff;
        }
    }
   span{
       font-size: 14px;
   }
    *{
        margin: 0;
        padding: 0;
        text-align: left;
    }

    .icon {
        position: absolute;
        right: 10px;
        top: 10px;
    }
    .general-icon {
        margin-right: 12px;
    }
    svg{
        height: 16px;
        width: 16px;
    }

</style>
