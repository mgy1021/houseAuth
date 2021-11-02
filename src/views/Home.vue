<!--
 * @Description: 
 * @Author: Mogy
 * @Date: 2021-10-13 15:44:13
 * @LastEditors: Mogy
 * @LastEditTime: 2021-11-02 17:19:23
-->
<template>
  <div>
    <el-carousel trigger="click" height="650px">
      <el-carousel-item v-for="item in imgs" :key="item.id">
        <div class="carousel_text">
          <div class="carousel_text_box">
            <div class="carousel_text_box_title1" style="text-align: left">
              <span
                >打造价值房企，铸造<span
                  style="font-size: 110px; margin: 0 20px"
                  >品牌</span
                >传承</span
              >
            </div>
            <div
              class="carousel_text_box_title2"
              style="text-align: left; color: #ffffff8d"
            >
              <span>MAKE ROOM OF VALUE, CASTING BRAND IN ONE HUNDERD</span>
            </div>
          </div>
        </div>
        <img
          :src="item.url"
          alt="图片加载失败"
          style="width: 100%; height: 100%"
        />
      </el-carousel-item>
    </el-carousel>
    <div class="newsBox mt100px">
      <div class="news_header">
        <div class="title_box">
          <div class="title">
            <span>新闻资讯</span>
            <span class="hengxian1"></span>
            <span class="hengxian2"></span>
          </div>
          <div class="small_title">NEWS</div>
        </div>
      </div>
      <div class="news_main mt50px">
        <div class="news_list" id="news_list" style="opacity: 0">
          <div class="news_one" v-for="item in news" :key="item.id">
            <div class="news_img">
              <img
                :src="item.cover"
                alt=""
                style="width: 180px; height: 107px"
              />
            </div>
            <div>
              <div class="news_one_title_box">
                <span class="news_one_title" @click="newJump(item.id)">{{
                  item.title
                }}</span>
                <span>{{
                  moment(item.publish_time).format("YYYY-MM-DD")
                }}</span>
              </div>
              <div class="news_info">
                {{ item["content-title"] }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ad mt100px mb100px">
      <div id="ad_box" class="ad_box" style="opacity: 0">
        <div class="ad_title">
          <span>追求不凡品质，缔造行业经典！</span>
        </div>
        <div class="ad_tele">
          <span>TEL：000-000-0000</span>
        </div>
      </div>
    </div>
    <div id="aboutBox" class="aboutBox mt100px">
      <div class="about_header">
        <div class="title_box">
          <div class="title">
            <span>关于我们</span>
            <span class="hengxian1"></span>
            <span class="hengxian2"></span>
          </div>
          <div class="small_title">ABOUT US</div>
        </div>
      </div>
      <div class="about_main mt50px">
        <div id="about_info" class="about_info mb100px" style="opacity: 0">
          <span class="info_p">
            {{ describe }}
          </span>
        </div>
        <div class="about_body clearfix">
          <div class="about_bg1 about_bg" style="opacity: 0">
            <img
              src="@/assets/abou2.png.webp"
              alt=""
              style="width: 345px; height: 345px"
            />
          </div>
          <div class="about_bg2 about_bg" style="opacity: 0">
            <img
              src="@/assets/about1.png.webp"
              alt=""
              style="width: 246px; height: 246px"
            />
          </div>
          <div
            style="opacity: 0"
            class="about_spans"
            v-for="item in aboutsTag"
            :key="item.id"
          >
            {{ item.content }}
          </div>
          <!-- <div style="opacity: 0" class="about_spans">天道酬勤/诚信服务</div>
          <div style="opacity: 0" class="about_spans">思想发展/开拓发展</div>
          <div style="opacity: 0" class="about_spans">实力强大/安全保障</div>
          <div style="opacity: 0" class="about_spans">技术保障/安全完善</div>
          <div style="opacity: 0" class="about_spans">客户为主/优质保障</div>
          <div style="opacity: 0" class="about_spans">立定对象/遍布全国</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { findAllTag, findAll } from "@/api/findAllTag.js";
import { queryOne } from "@/api/carousel.js";
import { newsFindAll } from "@/api/news.js";
import $ from "jquery";
import moment from "moment";
export default {
  data() {
    return {
      imgs: [],
      aboutsTag: [],
      describe: "",
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
    async findAllTag() {
      let res = await findAllTag();
      this.aboutsTag = res.data;
      // console.log(this.aboutsTag);
    },
    async findAll() {
      let res = await findAll();
      // let {describe} = res.data[0];
      // this.describe = describe;
      // console.log(describe);
      this.describe = res.data[0].describe;
      // console.log(this.describe);
    },
    async queryOne() {
      let res = await queryOne({ type: 1 });
      this.imgs = res.data;
      // console.log(this.imgs);
    },
    async newsFindAll() {
      let res = await newsFindAll();
      // for (let i = 0; i < res.data.length; i++) {
      //   const element = array[i];

      // }
      this.news = res.data;
      console.log(this.news);
    },
    isVisibled(id) {
      // 判断某个 div 是否在浏览器可见区域
      let dom = null;
      if (typeof iid === "object") {
        dom = id;
      } else {
        dom = $(id);
      }
      if (dom.length <= 0) {
        return;
      }
      3;
      const of = dom.offset();
      const w = $(window);
      return !(
        w.scrollTop() > of.top + dom.outerHeight() ||
        w.scrollTop() + w.height() < of.top
      );
    },
    getModuleHeight() {
      // "关于我们描述入场动画"
      if (this.isVisibled("#about_info")) {
        $("#about_info").addClass("animate__animated animate__slideInUp");
        // this.moduleAnimateActive["#carouselSection"] = true;
        $("#about_info").css({
          opacity: 1,
        });
      }
      // "关于我们图片入场动画"
      if (this.isVisibled(".about_spans")) {
        $(".about_spans").addClass("animate__animated animate__slideInUp");
        // this.moduleAnimateActive["#carouselSection"] = true;
        $(".about_spans").css({
          opacity: 1,
        });
      }
      // "关于我们图片入场动画"
      if (this.isVisibled(".about_bg")) {
        $(".about_bg").addClass("animate__animated animate__slideInUp");
        // this.moduleAnimateActive["#carouselSection"] = true;
        $(".about_bg").css({
          opacity: 1,
        });
      }
      // "广告标题入场动画"
      if (this.isVisibled(".ad_box")) {
        $(".ad_box").addClass("animate__animated animate__slideInUp");
        // this.moduleAnimateActive["#carouselSection"] = true;
        $(".ad_box").css({
          opacity: 1,
        });
      }
      // "新闻列表入场动画"
      if (this.isVisibled(".news_list")) {
        $(".news_list").addClass("animate__animated animate__slideInUp");
        // this.moduleAnimateActive["#carouselSection"] = true;
        $(".news_list").css({
          opacity: 1,
        });
      }
    },
  },
  created() {
    window.onscroll = () => {
      this.getModuleHeight();
    };
    this.findAllTag();
    this.findAll();
    this.queryOne();
    this.newsFindAll();
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
.carousel_text {
  color: #ffffff;
  width: 70%;
  height: 100%;
  position: absolute;
  left: 50%;
  margin-left: -35%;
  .carousel_text_box {
    width: 857px;
    margin: 0 auto;
    margin-top: 8%;
    .carousel_text_box_title1 {
      font-size: 50px;
    }
  }
}
.newsBox {
  .news_header {
    .title_box {
      .title {
        line-height: 70px;
        margin: 0 auto;
        width: 18%;
        border: 2px solid rgba(153, 153, 153, 0.548);
        // padding: 10px 20px;
        font-size: 35px;
        padding-top: 0px;
        font-weight: bold;
        font-family: "微软雅黑";
        color: #2b2b2b;
        position: relative;
        .hengxian1 {
          position: absolute;
          top: 50%;
          margin-top: -2px;
          left: -48%;
          width: 50%;
          height: 2px;
          background-color: rgba(153, 153, 153, 0.548);
        }
        .hengxian2 {
          position: absolute;
          top: 50%;
          margin-top: -2px;
          right: -48%;
          width: 50%;
          height: 2px;
          background-color: rgba(153, 153, 153, 0.548);
        }
      }
      .small_title {
        font-size: 28px;
        color: rgb(122, 120, 120);
      }
    }
  }
  .news_main {
    .news_list {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .news_one {
        border-bottom-style: dotted;
        border-bottom-width: 1px;
        border-bottom-color: #cccccc;
        padding: 30px 0;
        &:nth-child(3),
        &:nth-child(4) {
          border: none;
        }
        .news_img {
          margin-right: 10px;
        }
        width: 552px;
        display: flex;
        justify-content: space-between;
        .news_one_title_box {
          &:hover {
            font-weight: bold;
          }
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
          .news_one_title {
            text-align: left;
            width: 243px;
            font-size: 18px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
          }
        }
        .news_info {
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
      }
    }
  }
}
.ad {
  height: 300px;
  background-image: url("../assets/bgimg3.jpg");
  background-size: cover;
  position: relative;
  .ad_box {
    color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -60px;
    margin-left: -336px;
    .ad_title {
      font-size: 48px;
      font-weight: bold;
    }
    .ad_tele {
      line-height: 60px;
      font-size: 30px;
    }
  }
}
.aboutBox {
  .about_header {
    .title_box {
      .title {
        line-height: 70px;
        margin: 0 auto;
        width: 18%;
        border: 2px solid rgba(153, 153, 153, 0.548);
        // padding: 10px 20px;
        font-size: 35px;
        padding-top: 0px;
        font-weight: bold;
        font-family: "微软雅黑";
        color: #2b2b2b;
        position: relative;
        .hengxian1 {
          position: absolute;
          top: 50%;
          margin-top: -2px;
          left: -48%;
          width: 50%;
          height: 2px;
          background-color: rgba(153, 153, 153, 0.548);
        }
        .hengxian2 {
          position: absolute;
          top: 50%;
          margin-top: -2px;
          right: -48%;
          width: 50%;
          height: 2px;
          background-color: rgba(153, 153, 153, 0.548);
        }
      }
      .small_title {
        font-size: 28px;
        color: rgb(122, 120, 120);
      }
    }
  }
  .about_main {
    .about_info {
      .info_p {
        display: block;
        margin: 0 auto;
        width: 1200px;
        line-height: 36px;
        color: #888888;
      }
    }
    .about_body {
      height: 400px;
      position: relative;
      .about_bg1 {
        top: 0;
        left: 50%;
        margin-left: -172.5px;
        position: absolute;
      }
      .about_bg2 {
        top: 50px;
        left: 50%;
        margin-left: -123px;
        position: absolute;
      }
      .about_spans {
        font-size: 16px;
        color: #666666;
        &:nth-child(3) {
          position: absolute;
          top: -30px;
          left: 50%;
          margin-left: -50px;
        }
        &:nth-child(4) {
          position: absolute;
          top: 35px;
          left: 50%;
          margin-left: -280px;
        }
        &:nth-child(5) {
          position: absolute;
          top: 55px;
          left: 50%;
          margin-left: 170px;
        }
        &:nth-child(6) {
          position: absolute;
          top: 214px;
          left: 50%;
          margin-left: 190px;
        }
        &:nth-child(7) {
          position: absolute;
          top: 330px;
          left: 50%;
          margin-left: 90px;
        }
        &:nth-child(8) {
          position: absolute;
          top: 320px;
          left: 50%;
          margin-left: -250px;
        }
        &:nth-child(9) {
          position: absolute;
          top: 192px;
          left: 50%;
          margin-left: -327px;
        }
      }
    }
  }
}
</style>
