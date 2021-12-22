<template>
    <div class="writing">
        <div class="describe">
            <span>描述</span>
            <el-input
                    v-model="options.describe"
                    autosize
                    type="textarea"
                    placeholder="输入作文描述"
            />
        </div>
        <div class="model_essay">
            <span>范文</span>
            <MyEditor></MyEditor>
        </div>
    </div>
</template>

<script setup>
    import {reactive,watch} from 'vue'
    import MyEditor from './MyEditor.vue'
    let options=reactive({
        describe:"",
    })
</script>

<style scoped>
    span{
        flex-shrink: 0;
        width: 60px;
        text-align: center;
    }
    .describe,.model_essay{
        display: flex;
        margin: 0 0 12px 0;
    }
</style>
