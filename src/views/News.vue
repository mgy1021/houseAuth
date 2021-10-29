<template>
  <div class="news">
    <div class="header">
      <div class="line1"></div>
      <div class="head">新闻资讯</div>
      <div class="line2"></div>
      <div class="english">NEWS</div>
    </div>
    <div class="box">
      <div class="new" v-for="item in news" :key="item.id">
        <div class="photo"><img :src="item.cover" alt="" /></div>
          <div class="title" @click="newJump(item.id)">{{ item.title }}</div>
        <div class="date">
          {{ moment(item.publish_time).format("YYYY-MM-DD") }}
        </div>
        <div class="content">
          {{ item["content-title"] }}
        </div>
        <div class="inline"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { test } from "@/api/queryHouse.js";
import moment from "moment";
import { newsFindAll } from "@/api/news.js";

export default {
  data() {
    return {
      news: [],
      moment,
    };
  },
  computed: {},
  methods: {
    newJump(id) {
      this.$router.push({
        name: "NewDetails",
        query: {
          id: id,
        },
      });
    },
    async newsFindAll() {
      let res = await newsFindAll();
      this.news = res.data;
      console.log(this.news);
    },
    async a() {
      let res = await test();
      console.log(res);
    },
  },
  created() {
    this.a();
    this.newsFindAll();
  },
  mounted() {},
};
</script>
<style scoped>
.news {
  width: 1300px;
  margin: 50px auto;
}
.header {
  display: flex;
  position: relative;
}
.line1,
.line2 {
  position: absolute;
  width: 100px;
  height: 1px;
  background-color: #ccc;
}
.line1 {
  left: 32%;
  top: 37%;
}
.line2 {
  right: 32%;
  top: 37%;
}
.head {
  font-size: 32px;
  margin: 50px auto 100px;
  border: 1px solid #ccc;
  width: 300px;
  line-height: 50px;
}
.english {
  margin-top: 10px;
  font-size: 28px;
  color: #ccc;
  position: absolute;
  left: 46.5%;
  top: 50%;
}
.box{
  width: 1300px;
  display: flex;
  flex-wrap: wrap;
}
.new {
  position: relative;
  width: 600px;
  height: 200px;
  margin: 20px;
}
.photo {
  text-align: left;
}
.photo img {
  width: 200px;
  height: 150px;
}
.title,
.date,
.content {
  position: absolute;
}
.title {
  width: 280px;
  top: 5px;
  left: 210px;
  font-size: 18px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.date {
  top: 5px;
  right: 10px;
  font-size: 17px;
}
.content {
  font-size: 16px;
  margin-top: 10px;
  top: 60px;
  left: 210px;
  width: 380px;
  /* text-overflow: ellipsis; */
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.inline {
  width: 600px;
  height: 1px;
  background-color: #ccc;
  margin-top: 20px;
}
</style>
