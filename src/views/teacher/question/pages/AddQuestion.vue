<template>
    <div class="add_question_template">
        <div class="title">添加{{style}}</div>
        <div class="question_content">
            <!-- 插槽-->
         <PublicTemplate>
             <template v-slot:单项选择题>
                 <ChoiceQuestion :style="'单项选择题'"></ChoiceQuestion>
             </template>
             <template v-slot:多项选择题>
                 <ChoiceQuestion :style="'多项选择题'"></ChoiceQuestion>
             </template>
             <template v-slot:判断题>
                 <Judge></Judge>
             </template>
             <template v-slot:填空题>
                 <GapFilling></GapFilling>
             </template>
             <template v-slot:简答题>
                 <ShortQuestion></ShortQuestion>
             </template>
             <template v-slot:翻译>
                 <ShortQuestion></ShortQuestion>
             </template>
             <template v-slot:作文>
                 <Writing></Writing>
             </template>
             <template v-slot:阅读理解>
                 <Reading></Reading>
             </template>
             <template v-slot:完形填空>
                 <ClozeTest></ClozeTest>
             </template>
         </PublicTemplate>
        </div>
    </div>
</template>

<script setup>
    import ClozeTest from '../components/ClozeTest.vue'
    import ChoiceQuestion from '../components/ChoiceQuestion.vue'
    import PublicTemplate from './PublicTemplate.vue'
    import Judge from '../components/Judge.vue'
    import GapFilling from '../components/GapFilling.vue'
    import ShortQuestion from '../components/ShortQuestion.vue'
    import Writing from '../components/Writing.vue'
    import Reading from '../components/Reading.vue'
    import {inject,ref} from 'vue'
    let style=inject('addQuestionStyle')
</script>

<style scoped>
    .add_question_template{
        border: 1px solid #cbcbcb;
        width: 100%;
    }
    .title{
        padding: 6px 12px;
        text-align: left;
        color: black;
        border: 1px solid #cbcbcb;
        background-color: #f1f2f5;
    }
    .question_content{
        width: 100%;
        padding: 6px;
    }
</style>
