<!--
 * @Description: 
 * @Author: Mogy
 * @Date: 2021-10-13 15:44:13
 * @LastEditors: Mogy
 * @LastEditTime: 2021-10-16 11:02:29
-->
<template>
  <div>
    <el-carousel trigger="click" height="650px">
      <el-carousel-item v-for="item in imgs" :key="item">
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
          src="@/assets/bgimg1.jpg"
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
          <div class="news_one" v-for="item in 4" :key="item">
            <div class="news_img">
              <img
                src="@/assets/news_1.jpg"
                alt=""
                style="width: 180px; height: 107px"
              />
            </div>
            <div>
              <div class="news_one_title_box">
                <span class="news_one_title">国土资源数据共享开放平台将建</span>
                <span>2019-11-21</span>
              </div>
              <div class="news_info">
                国土资源部今天发布的《关于促进国土资源大数据应用发展的实施意见》显示，到2018年底，我国将初步建成国土资源数据共...
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
          <span>
            <p class="info_p">
              xx信房地产股份有限公司成立于1995年7月，拥有建设部颁发优质开发资质、设计资质、物业服务资质。在
            </p>
            <p class="info_p">
              其21年的发展历程中，先后获得“中国房地产品牌企业xx强”、“中国城市运营商xx强”、“中国值得尊敬的房地产
            </p>
            <p class="info_p">
              品牌企业”等荣誉称号，所建设的项目多次获得鲁班奖、广厦奖、…
            </p>
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
          <div style="opacity: 0" class="about_spans">上市公司/资金雄厚</div>
          <div style="opacity: 0" class="about_spans">天道酬勤/诚信服务</div>
          <div style="opacity: 0" class="about_spans">思想发展/开拓发展</div>
          <div style="opacity: 0" class="about_spans">实力强大/安全保障</div>
          <div style="opacity: 0" class="about_spans">技术保障/安全完善</div>
          <div style="opacity: 0" class="about_spans">客户为主/优质保障</div>
          <div style="opacity: 0" class="about_spans">立定对象/遍布全国</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      imgs: ["@/assets/bgimg1.jpg", "@/assets/bgimg2.jpg"],
    };
  },
  computed: {},
  methods: {
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
            font-size: 16px;
          }
        }
        .news_info {
          font-size: 14px;
          color: #666666;
          text-align: left;
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
