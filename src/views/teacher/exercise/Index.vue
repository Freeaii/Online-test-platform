<template>
  <div class="container">
  <h4 class="title">训练管理</h4>
    <el-row>
      <el-col :span="8">
        <el-checkbox-group v-model="selectedValue" size="small">
          <el-checkbox-button
            v-for="item in list"
            :key="item.value"
            :label="item.value"
            @click="handleClick(item.value)"
            >{{ item.label }}
          </el-checkbox-button>
        </el-checkbox-group>
      </el-col>
    </el-row>
    <el-form :inline="true" :model="form" class="search-form">
      <el-row justify="between">
        <el-col :span="8">
          <el-form-item label="考试名称">
            <el-input v-model="form.name" placeholder="Approved by"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
           <el-form-item label="考试编号">
            <el-input v-model="form.id" placeholder="Approved by"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="考试编号">
            <el-select v-model="form.region" placeholder="Activity zone">
              <el-option label="Zone one" value="shanghai"></el-option>
              <el-option label="Zone two" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">搜索</el-button>
        </el-col>
      </el-row>
    </el-form>
    <exercise-table></exercise-table>
  </div>
</template>

<script>
import { reactive, toRef, toRefs } from "vue";
import exerciseTable from './components/ExerciseTable.vue';
const selectButtons = [
  {
    label: "单选",
    value: 1,
  },
  {
    label: "单选",
    value: 2,
  },
  {
    label: "单选",
    value: 3,
  },
  {
    label: "单选",
    value: 4,
  },
  {
    label: "单选",
    value: 5,
  },
];
export default {
  name: "exercise_index",
  components: {
    exerciseTable
  },
  setup() {
    const stateSelect = reactive({
      selectedValue: [1],
      list: selectButtons,
    });
    function handleClick(value) {
      stateSelect.selectedValue = [value];
    }
    const form = reactive({
      name: null, // 考试名称
      id: null, // 考试编号
    });
    return {
      ...toRefs(stateSelect),
      form,
      handleClick,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 10px;
  box-shadow: 0 0 5px #d0d3d4;
  border-radius: 4px;
  .title {
    text-align: left;
    margin: 10px 0 20px 20px;
  }
  .search-form {
    margin: 20px 0;
  }
}
</style>