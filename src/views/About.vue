<!--
 * @Description: 
 * @Author: ljy
 * @Date: 2021-10-22 11:29:02
 * @LastEditors: ljy
 * @LastEditTime: 2021-10-22 15:02:04
-->
<template>
  <div class="about">
    <div class="aboutTop">
      <img src="../assets/zhAbout.jpg" alt="">
    </div>
    <div class="mBox">
      <div class="intro animate__animated animate__backInRight">
        公司成立于2016年，注册资金1200万，是一家专业的互联网公司。公司主要服务于中小企业，提供网站搭建、软件制作、宣传视频、网络推广、营销于一体的专业服务。公司以“以创造为动力，以品质为基础”为核心价值，希望通过我们的专业水平和不懈努力，重塑中小企业网络形象，为企业产品推广、文化建设传播提供服务指导。两年来，我们一直秉承以用户需求为核心，在专注市场开拓的同时，为超过一百家中小企业提供网站策划服务，优质用心的服务赢得了众多企业的信赖和好评，逐渐树立起公司良好品牌。公司不仅仅提供专业的网站搭建服务，同时还建立了完善的售后服务体系，为企业发展中遇到的问题和困难提供指导帮助。我们相信，通过我们的不断努力和追求，为客户推广其公司以及公司产品，一定能够实现与中小企业的互利共赢！
      </div>
      <div class="talk animate__animated animate__backInRight">
        <img src="../assets/talk1.webp" alt="">
        <img src="../assets/talk2.webp" alt="">
        <img src="../assets/talk3.webp" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.mBox{
  width: 1200px;
  margin: 0 auto;
}
.intro{
  margin: 100px auto 70px;
}
.talk{
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}
</style>