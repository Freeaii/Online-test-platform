<template>
    <div class="question_style">
        <span>{{menu.title}}</span>
        <div class="radios">
            <button @click="changeStyle" :class="styleChoose===item?'choose':null" v-for="(item,index) in menu.radios" :key="index" :value="item">{{item}}</button>
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
    import {ref,provide,onMounted} from 'vue'
    import {useStore} from 'vuex'

    const store=useStore()
    /*
    * 接收父组件传递过来的选择列表
    * */
    let data=defineProps({
        menu:{
            type:Object,
            required:true
        },
        getStyle:{
            type:Function,
            required:false
        }
    })

    //设置初始化选项
    let styleChoose=ref(data.menu.radios[0])

    //设置点击之后颜色的显示
    function changeStyle(event) {
        //变更颜色显示
        styleChoose.value=event.target.value

        //通知题目添加组件变更
        data.getStyle(event.target.value)
    }

    onMounted(()=>{
        //将数据更新到vuex中
        if(data.menu.title==="题型"){
            console.log(data.menu.title)
            store.dispatch('changeQuestionStyle',data.menu.radios[0])
        }
        if(data.menu.title==='难度'){
            store.dispatch('changeLevel',data.menu.radios[0])
        }
    })

</script>

<style lang="less" scoped>

    .question_style{
        display: flex;
    }
    span{
        margin-right: 24px;
        min-width: 40px;
    }
    .radios{
        display: flex;
        flex-wrap: wrap;
    }
    button{
        border: 1px solid #f1f2f5;
        background-color: #ffffff;
        border-radius: 4px;
        margin: 0 12px 12px 0;
    }
    .choose{
        background-color: dodgerblue;
        color: white;
    }
</style>
