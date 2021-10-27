<!--
 * @Description: 
<<<<<<< HEAD
 * @Author: Mogy
 * @Date: 2021-10-15 13:43:01
 * @LastEditors: ljy
 * @LastEditTime: 2021-10-27 14:35:09
=======
 * @Author: ljy
 * @Date: 2021-10-22 11:29:02
 * @LastEditors: ljy
 * @LastEditTime: 2021-10-22 16:12:37
>>>>>>> 1e5687e2cce8f77618884352976130ff85474222
-->
<template>
  <div class="news">
    <div class="header">
      <div class="line1"></div>
      <div class="head">新闻资讯</div>
      <div class="line2"></div>
      <div class="english">NEWS</div>
    </div>
    <div class="new">
      <div class="photo"><img src="../assets/news_1.jpg" alt="" /></div>
      <router-link to="/newDetails">
        <div class="title">苹果又遭专利诉讼：因Apple TV快速回放功能侵权</div>
      </router-link>
      <div class="date">2021-9-9</div>
      <div class="content">
        一家位于佛罗里达州的数字视频公司正在就苹果公司第四代Apple
        TV的Siri功能提起专利诉讼。这家名为CustomPlay的公司称，是他们早开发了Apple
        TV和Siri正在使用的这一功能，该功能允许用户可以询问“他说了什么?”以回顾一小段视频。
      </div>
      <div class="inline"></div>
    </div>
    <!-- <div class="new">
      <div class="title">苹果又遭专利诉讼：因Apple TV快速回放功能侵权</div>
      <div class="content">
        <router-link to="/newDetails">
          一家位于佛罗里达州的数字视频公司正在就苹果公司第四代Apple
          TV的Siri功能提起专利诉讼。这家名为CustomPlay的公司称，是他们早开发了Apple
          TV和Siri正在使用的这一功能，该功能允许用户可以询问“他说了什么?”以回顾一小段视频。
        </router-link>
      </div>
      <div class="date">2021-9-9</div>
      <div class="inline"></div>
    </div> -->
  </div>
</template>

<script>
import { test } from "@/api/queryHouse.js";
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    async a() {
      let res = await test();
      console.log(res);
    },
  },
  created() {
    this.a();
  },
  mounted() {},
};
</script>
<style scoped>
.news {
  width: 1100px;
  height: 500px;
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
  left: 28%;
  top: 37%;
}
.line2 {
  right: 28%;
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
  font-size: 26px;
  color: #ccc;
  position: absolute;
  left: 46.5%;
  top: 50%;
}
.new {
  position: relative;
  width: 600px;
  height: 150px;
  /* background-color: aqua; */
  /* display: flex; */
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
