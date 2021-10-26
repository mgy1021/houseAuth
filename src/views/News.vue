<!--
 * @Description: 
 * @Author: ljy
 * @Date: 2021-10-22 11:29:02
 * @LastEditors: ljy
 * @LastEditTime: 2021-10-22 16:12:37
-->
<template>
  <div class="news">
    <div class="head">新闻资讯</div>
    <div class="new">
      <div class="title">苹果又遭专利诉讼：因Apple TV快速回放功能侵权</div>
      <div class="content">
        <router-link to="/newDetails">
        一家位于佛罗里达州的数字视频公司正在就苹果公司第四代Apple TV的Siri功能提起专利诉讼。这家名为CustomPlay的公司称，是他们早开发了Apple TV和Siri正在使用的这一功能，该功能允许用户可以询问“他说了什么?”以回顾一小段视频。
        </router-link>
      </div>
      <div class="date">2021-9-9</div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.news{
  width: 1100px;
  height: 500px;
  margin: 50px auto;
}
.head{
  font-size: 28px;
  margin-bottom: 100px;
}
.new{
  position: relative;
}
.title,.content{
  padding: 5px;
  text-align: left;
  margin-bottom: 10px;
}
.title{
  font-size: 20px;
}
.content{
    text-overflow: ellipsis; 
    overflow: hidden;
    width: 700px;
    height: 16px;
    font-size: 16px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    margin-bottom: 20px;

}
.date{
  position: absolute;
  right: 30px;
  top: 10px;
}
.line{
  height: 1px;
  background-color: #ccc;
}
</style>
