<!--
 * @Description: 
 * @Author: Mogy
 * @Date: 2021-10-13 15:44:13
 * @LastEditors: Mogy
 * @LastEditTime: 2021-10-20 15:44:30
-->
<template>
  <div id="app">
    <!-- 回到顶部 -->
    <el-backtop :bottom="60" style="height: 50px; width: 50px">
      <img src="@/assets/toTop.png" alt="" style="height: 100%; width: 100%" />
    </el-backtop>
    <el-container>
      <el-header style="height: 130px">
        <div class="title">
          <span>智慧房产认证系统</span>
        </div>
        <ul class="menu">
          <li @click="changeTag('首页')">
            <router-link to="/" :class="{ active: isActive == '首页' }"
              >首页</router-link
            >
          </li>
          <li @click="changeTag('关于我们')">
            <router-link to="/about" :class="{ active: isActive == '关于我们' }"
              >关于我们</router-link
            >
          </li>
          <li @click="changeTag('新闻中心')">
            <router-link to="/news" :class="{ active: isActive == '新闻中心' }"
              >新闻中心</router-link
            >
          </li>
          <li @click="changeTag('房产查询')">
            <router-link
              to="/queryHouse"
              :class="{ active: isActive == '房产查询' }"
              >房产查询</router-link
            >
          </li>
          <li @click="changeTag('信息上链')">
            <router-link
              to="/houseUpdate"
              :class="{ active: isActive == '信息上链' }"
              >信息上链</router-link
            >
          </li>
        </ul>
      </el-header>
      <div class="main">
        <router-view />
      </div>
      <el-footer style="height: 350px">
        <div class="footer_box">
          <div class="contact">
            <div class="contact_title">
              <span> CONTACT US </span>
            </div>
            <div>地址：XXX省XXX市XXX县XXX路XXX号</div>
            <div>电话：000-000-000</div>
            <div>邮箱：xxx@qq.com</div>
            <div class="footer_img"></div>
          </div>
          <div class="design">
            <div class="design_title">REAL ESTATE DESIGN</div>
            <div>首页 关于我们 新闻中文 社会责任 人才招聘</div>
            <div></div>
            <div></div>
          </div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: "首页",
    };
  },
  computed: {},
  methods: {
    changeTag(tagName) {
      this.$nextTick(() => {
        console.log(tagName);
        this.isActive = tagName;
      });
    },
  },
  created() {
    this.changeTag("首页");
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
.el-header {
  position: relative;
}
.el-header .title {
  height: 40px;
  position: absolute;
  top: 50%;
  left: 12%;
  margin-top: -20px;
}
.el-header .menu {
  /* line-height: 130px; */
  /* height: 40px; */
  position: absolute;
  top: 50%;
  right: 16%;
  margin-top: -25px;
}
.el-header .menu li {
  // background: #999999;
  float: left;
  // display: block;
  text-align: center;
  margin-right: 20px;
}
.el-header .menu li a {
  display: block;
  height: 50px;
  line-height: 50px;
  width: 80px;
  padding: 0 5px;
  box-sizing: border-box;
}
.el-header .menu li:hover {
  border-bottom-color: rgb(43, 43, 43);
}
.active {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: rgb(43, 43, 43);
}
.el-header {
  background-color: #ffffff;
  color: #333;
  /* text-align: center; */
  /* line-height: 130px; */
}

.main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  padding: 0;
}

body > .el-container {
  margin-bottom: 40px;
}
.el-header .title {
  font-size: 32px;
  font-weight: 600;
}
.el-footer {
  color: #999999;
  background-image: url(./assets/flooter.jpg);
  .footer_box {
    position: relative;
    width: 70%;
    height: 100%;
    margin: 0 auto;
    .contact {
      padding: 30px;
      position: absolute;
      left: 20px;
      top: 50%;
      margin-top: -100px;
      width: 305px;
      height: 155px;
      border: 1px solid #aaa6a66c;
      .contact_title {
        font-size: 30px;
        margin-bottom: 10px;
      }
      & > div:nth-child(2),
      & > div:nth-child(3),
      & > div:nth-child(4) {
        font-size: 14px;
        line-height: 38px;
      }
      .footer_img {
        position: absolute;
        bottom: -35px;
        right: -26px;
        width: 85px;
        height: 85px;
        background-image: url(./assets/footer2.png.webp);
      }
    }
    .design {
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -100px;
    }
  }
}
</style>
