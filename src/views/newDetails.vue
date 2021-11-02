<!--
 * @Description: 
 * @Author: ljy
 * @Date: 2021-10-22 15:38:36
 * @LastEditors: Mogy
 * @LastEditTime: 2021-10-29 15:44:36
-->
<template>
  <div class="Det">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in imgs" :key="item.id">
        <img :src="item.url" alt="" />
      </el-carousel-item>
    </el-carousel>
    <div class="details">
      <div class="title">{{ newDet.title }}</div>
      <div class="date">
        {{ moment(newDet.publish_time).format("YYYY-MM-DD") }}
      </div>
      <div class="content" v-html="newDet.content">
        {{ newDet.content }}
      </div>
    </div>
  </div>
</template>

<script>
import { newsFindAll } from "@/api/news.js";
import moment from "moment";
import { queryOne } from "@/api/carousel.js";

export default {
  data() {
    return {
      newDet: {},
      id: 0,
      moment,
      imgs: [],
    };
  },
  computed: {},
  methods: {
    async queryOne() {
      let res = await queryOne({ type: 1 });
      this.imgs = res.data;
      // console.log(this.imgs);
    },
    async newsFindAll() {
      let res = await newsFindAll();
      this.newDet = res.data[this.id];
      console.log(this.newDet);
    },
  },
  created() {
    this.id = this.$route.query.id;
    this.newsFindAll();
    this.queryOne();
  },
  mounted() {},
};
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
img {
  width: 100%;
  height: 100%;
}
.details {
  width: 1100px;
  margin: 0 auto;
  position: relative;
}
.title,
.content,
.date {
  text-align: left;
}
.title {
  font-size: 20px;
  margin: 50px 0;
}
.date {
  position: absolute;
  right: 0;
  top: 10px;
}
.content {
  margin-bottom: 50px;
}
</style>