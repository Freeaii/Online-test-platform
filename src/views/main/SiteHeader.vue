<template>
    <header>
        <el-space>
            <el-button icon="IconMenu" circle @click="emit('toggleMenu')">
              </el-button>
            <span style="font-size:20px;">在线训练系统</span>
        </el-space>

        <el-space>
            <el-dropdown>
                <el-space>
                    <el-avatar size="small" :src="user.avatar"></el-avatar>
                    <span style="color: wheat;">{{user.name}}</span>
                </el-space>
                <template #dropdown>
                    <template v-if="user.role === 'guest'">
                        <el-dropdown-menu>
                            <el-dropdown-item>
                                <router-link to="/login">登录</router-link>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                    <template v-else>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="switchAccount()">切换账号</el-dropdown-item>
                            <el-dropdown-item @click="switchAccount('logout')">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </template>
            </el-dropdown>
        </el-space>
    </header>
</template>

<script setup>
import { ref, inject } from "vue";
import { useStore } from "vuex";
import { useRouter } from 'vue-router'
import logo from "@/assets/logo.png";

const emit = defineEmits(['toggleMenu'])
const router = useRouter()
const store = useStore()

const user = inject('user')
const logoUrl = ref(logo)

/**
 * 切换账号
 */
function switchAccount(){
    store.dispatch('logout')
    router.push('/login')
}
</script>

<style lang="scss" scoped>
header {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    color:white;
}
</style>
