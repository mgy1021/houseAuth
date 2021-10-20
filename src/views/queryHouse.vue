<!--
 * @Description: 
 * @Author: Mogy
 * @Date: 2021-10-15 13:43:30
 * @LastEditors: Mogy
 * @LastEditTime: 2021-10-20 15:03:10
-->
<template>
  <div>
    <el-carousel trigger="click" height="750px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img
          src="@/assets/queryHouse1.jpg"
          alt=""
          style="height: 100%; width: 100%"
        />
      </el-carousel-item>
    </el-carousel>
    <div class="tag">
      <div class="tag_box">
        <ul class="tag_list">
          <li>
            <div>
              <div>
                <img
                  src=""
                  alt=""
                  style="height: 117px; width: 117px; background: red"
                />
              </div>
              <div>品牌可信赖</div>
              <div>入住全国9成，拥有近45万业主 近300万租客</div>
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
    };
  },
  computed: {},
  methods: {
    async queryAllHouse() {
      let res = await queryAllHouse();
      console.log(res, "queryAll");
    },
    async queryOneHouse() {
      let res = await queryOneHouse({ inumber: this.inumber });
      console.log(res, "queryOneHouse");
    },
  },
  created() {
    // this.queryAllHouse();
    this.queryOneHouse();
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
.tag {
  height: 480px;
  background-color: turquoise;
  .tag_box {
    position: relative;
    height: 100%;
    width: 75%;
    background-color: tomato;
    margin: 0 auto;
    .tag_list {
      position: absolute;
      top: 50%;
    }
  }
}
</style>