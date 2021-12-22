<template>
    <div class="question-items">
        <ul>
            <li>
                <el-card>
                    <Choice></Choice>
                </el-card>
            </li>
        </ul>
    </div>
</template>

<script setup>
  import Choice from './questionShow/Choice.vue'
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
