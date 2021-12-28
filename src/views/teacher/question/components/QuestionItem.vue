<template>
    <div class="question-items">
        <ul>
            <li v-for="(item,index) in options.mchoices" :key="item.mchoice_id">
                <el-card>
                    <Choice :question="item"></Choice>
                </el-card>
            </li>
        </ul>
    </div>
</template>

<script setup>
  import Choice from './questionShow/Choice.vue'
  import {onMounted,reactive} from 'vue'
  import {useStore} from 'vuex'
  import https from "../../../../apis/axios";
  const  store=useStore()

  let options=reactive({
      mchoices:[],
  })
  onMounted(()=>{
      let {level,questionStyle}=store.state.teacher_question

      //此时需要传题型和难度，测试阶段没有携带
      https.post('/mchoice').then(res=>{
          options.mchoices=res.items
      })

  })
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  li{
      list-style: none;
      border: 1px solid #f1f2f5;
  }
</style>
