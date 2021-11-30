<template>
    <el-carousel height="500px" interval="5000" arrow="always">
      <el-carousel-item v-for="img in imgs" :key="img">
        <img :src="img" alt="school" style="height:100%">
      </el-carousel-item>
    </el-carousel>
</template>

<script setup>
import {ref} from 'vue'
import first from '@/assets/home/1.jpg'
import third from '@/assets/home/3.jpg'

const imgs = ref([first, third ])

</script>

<style lang="scss" scoped>

</style>