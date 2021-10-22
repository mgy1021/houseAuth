<!--
 * @Description: 
 * @Author: Mogy
 * @Date: 2021-10-15 13:43:30
 * @LastEditors: Mogy
 * @LastEditTime: 2021-10-22 10:14:48
-->
<template>
  <div>
    <el-carousel class="carousel_box" trigger="click" height="750px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img
          src="@/assets/queryHouse1.jpg"
          alt=""
          style="height: 100%; width: 100%"
        />
      </el-carousel-item>
      <div class="login_box">
        <div class="login_box_title">房产信息查询</div>
        <el-form class="login">
          <el-form-item class="login_item">
            <div class="textleft login_item_title">身份证号：</div>
            <div>
              <input
                v-model="form.name"
                type="text"
                style="width: 100%"
                placeholder="请输入身份证号码"
              />
            </div>
          </el-form-item>
          <el-form-item class="login_item">
            <div class="textleft login_item_title">房产编号：</div>
            <div>
              <input
                type="text"
                style="width: 100%"
                placeholder="请输入房产编号"
              />
            </div>
          </el-form-item>
          <el-form-item class="login_item">
            <div class="login_btn" @click="toSearch">查询</div>
          </el-form-item>
        </el-form>
      </div>
    </el-carousel>
    <div class="tag">
      <div class="tag_box">
        <ul class="tag_list">
          <li>
            <div>
              <div>
                <img
                  src="../assets/queryHouse_tag1.png.webp"
                  alt=""
                  style="height: 117px; width: 117px"
                />
              </div>
              <div class="tag_list_title mt15px">品牌可信赖</div>
              <div class="tag_list_info">
                入住全国9成，拥有近45万业主 近300万租客
              </div>
            </div>
          </li>
          <li>
            <div>
              <div>
                <img
                  src="../assets/queryHouse_tag2.png.webp"
                  alt=""
                  style="height: 117px; width: 117px"
                />
              </div>
              <div class="tag_list_title mt15px">品牌可信赖</div>
              <div class="tag_list_info">
                入住全国9成，拥有近45万业主 近300万租客
              </div>
            </div>
          </li>
          <li>
            <div>
              <div>
                <img
                  src="../assets/queryHouse_tag3.png.webp"
                  alt=""
                  style="height: 117px; width: 117px"
                />
              </div>
              <div class="tag_list_title mt15px">品牌可信赖</div>
              <div class="tag_list_info">
                入住全国9成，拥有近45万业主 近300万租客
              </div>
            </div>
          </li>
          <li>
            <div>
              <div>
                <img
                  src="../assets/queryHouse_tag4.png.webp"
                  alt=""
                  style="height: 117px; width: 117px"
                />
              </div>
              <div class="tag_list_title mt15px">品牌可信赖</div>
              <div class="tag_list_info">
                入住全国9成，拥有近45万业主 近300万租客
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { queryAllHouse, queryOneHouse } from "@/api/queryHouse.js";
export default {
  data() {
    return {
      // 查询资产参数
      inumber: "House1",
      input3: "",
      select: 0,
      form: {},
    };
  },
  computed: {},
  methods: {
    async queryAllHouse() {
      // let res = await queryAllHouse();
      // console.log(res, "queryAll");
    },

    toSearch() {
      this.$router.push({ path: "/house" });
    },
  },
  created() {
    // this.queryAllHouse();
    // this.queryOneHouse();
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
.carousel_box {
  position: relative;
  .login_box {
    color: rgb(255, 255, 255);
    width: 706px;
    height: 373px;
    background-image: url(../assets/login.png.webp);
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -190px;
    margin-left: -353px;
    z-index: 999;
    .login_box_title {
      line-height: 110px;
      font-size: 70px;
      color: rgb(255, 255, 255);
      font-weight: bold;
    }
    .login {
      width: 60%;
      margin: 0 auto;
      margin-top: 20px;
      .login_item {
        margin-bottom: 8px;
        .login_item_title {
          color: #e7e4e4a1;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 5px;
        }
        input {
          color: #858686;
          display: block;
          outline-style: none;
          border: 1px solid #ccc;
          border-radius: 3px;
          padding: 13px 14px;
          box-sizing: border-box;
          width: 620px;
          font-size: 14px;
          font-weight: 700;
          font-family: "Microsoft soft";
        }
        input::placeholder {
          color: #dedee2bb;
        }
        .login_btn {
          margin-top: 25px;
          line-height: 44px;
          width: 100%;
          background-color: yellowgreen;
          cursor: pointer;
        }
      }
    }
  }
}
.tag {
  height: 480px;
  .tag_box {
    position: relative;
    height: 100%;
    width: 75%;
    margin: 0 auto;
    .tag_list {
      width: 100%;
      position: absolute;
      top: 50%;
      margin-top: -105px;
      display: flex;
      justify-content: space-between;
      li {
        .tag_list_title {
          height: 30px;
          font-size: 18px;
        }
        .tag_list_info {
          width: 221px;
          font-size: 14px;
          line-height: 21px;
          color: #676767;
        }
      }
    }
  }
}
</style>