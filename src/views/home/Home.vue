<template>
  <div>
    <el-carousel style="height: 500px" :interval="5000" arrow="always">
      <el-carousel-item v-for="item in img" :key="item">
        <img :src="item" alt="school">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
// import { getCatalog, getLogin } from '../../api/data'
import first from '../../assets/home/1.jpg'
import third from '../../assets/home/3.jpg'
export default {
  name: "Home",
  data () {
    return {
      img: [
        first, third
      ]
    }
  },
  mounted () {
    // getCatalog().then((res) => {
    //   console.log(res)
    // })
  }
}
</script>

<style lang="scss">
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 500px;
  margin: 0;
}
.el-carousel {
  .el-carousel__arrow {
    margin-top: 100px;
  }
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  height: 500px;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  height: 500px;
}
</style>