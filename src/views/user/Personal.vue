<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="个人资料" name="first">
        <el-form ref="form" :model="userinfo" label-width="80px">
          <el-form-item label="工号">
            <el-input v-model="userinfo.workno"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="userinfo.name"></el-input>
          </el-form-item>
          <el-form-item label="任课">
            <el-input v-model="userinfo.course"></el-input>
          </el-form-item>
          <el-form-item label="班级">
            <el-input v-model="userinfo.grade"></el-input>
          </el-form-item>
          <el-form-item label="手机">
            <el-input v-model="userinfo.mobile"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="userinfo.email"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" >编辑资料</el-button>
            <el-button>提交保存</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="设置头像" name="second"> 设置头像 </el-tab-pane>
      <el-tab-pane label="更改密码" name="third"> 更改密码 </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Personal",
  data() {
    return {
      activeName:'first',
      userinfo: {
        workno: "123",
        name: "张三",
        course: "计算机文化基础",
        grade: "软件工程2017",
        mobile: "13700000000",
        email: "zs@swust.edu.cn",
      },
    };
  },
};
</script>

<style>
</style>