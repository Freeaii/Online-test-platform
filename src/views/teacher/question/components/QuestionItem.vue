<template>
    <div class="question-items">
        <ul>
            <li>
                <el-card>
                    <Choice ></Choice>
                </el-card>
            </li>
        </ul>
    </div>
</template>

<script setup>
  import Choice from './questionShow/Choice.vue'
  import {onMounted} from 'vue'
  import {useStore} from 'vuex'
  import https from "../../../../apis/axios";
  const  store=useStore()

  onMounted(()=>{
      let {level,questionStyle}=store.state.teacher_question
      https.get('/mchoice',{params:{level,questionStyle}}).then(res=>{
          console.log(res.items)
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
