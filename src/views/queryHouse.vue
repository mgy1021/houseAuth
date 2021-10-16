<!--
 * @Description: 
 * @Author: Mogy
 * @Date: 2021-10-15 13:43:30
 * @LastEditors: Mogy
 * @LastEditTime: 2021-10-16 13:39:35
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