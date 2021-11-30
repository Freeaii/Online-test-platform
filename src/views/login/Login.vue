<template>
    <el-container style="min-height: 100%">
        <el-main
            style="display: flex; justify-content: center; align-items: center"
        >
            <el-card header="在线训练系统" style="width: 400px">
                <el-form
                    ref="loginFormRef"
                    status-icon
                    :model="loginForm"
                    :rules="rules"
                    label-width="80px"
                    size="small"
                >
                    <el-form-item label="用户名" prop="username">
                        <el-input
                            v-model="loginForm.username"
                            placeholder="请输入用户名"
                            autofocus
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input 
                            type="password"
                            v-model="loginForm.password"
                            placeholder="请输入密码"
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click.stop="submitForm()"
                            >登录</el-button
                        >
                        <el-button native-type="reset">重置</el-button>
                    </el-form-item>
                    <el-form-item id="remember-me" prop="rememberMe">
                        <input  type="checkbox" v-model="loginForm.rememberMe" />记住密码
                    </el-form-item>
                </el-form>
            </el-card>
        </el-main>
    </el-container>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import https from '@/apis/axios'
import {useStore} from 'vuex';
import { useRouter } from 'vue-router'


const store = useStore();
const router = useRouter()

/* 登录表单引用*/
const loginFormRef = ref(null)

const loginForm = reactive({
    username: null,
    password: null,
    rememberMe:false
});


const rules = {
    username: [
        { required: true, message: "用户名缺失", trigger: "blur" },
        { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" },
    ],
    password: [
        { required: true, message: "请输入密码", trigger: "blur" },
        { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" },
    ],
};

onMounted(()=>{
    // 读取localStorage
    let token = window.localStorage.getItem('token')
    if(token){
        token = JSON.parse(token)
        if(token.rememberMe){
            loginForm.username = token.username
            loginForm.password = token.password
            loginForm.rememberMe = token.rememberMe
        }
    }
    

})

const submitForm = async () => {
    loginFormRef.value.validate(valid=>{
        let formData = new FormData();
        formData.append('username',loginForm.username)
        formData.append('password',loginForm.password)
        
        https.post('/auth/login', formData,{
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(response=>{
            store.commit('setToken', response)

            response.rememberMe = loginForm.rememberMe
            response.password = loginForm.password
            window.localStorage.setItem('token',JSON.stringify(response))
            router.push('/')
        })
    })
}
</script>


<style>
#remember-me {
    margin-bottom: 0;
}
#remember-me * {
    line-height: 10px;
    margin-top: 0;
    margin-bottom: 0;
}
</style>