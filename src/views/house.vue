<!--
 * @Description: 房产信息
 * @Author: Mogy
 * @Date: 2021-10-21 13:08:06
 * @LastEditors: Mogy
 * @LastEditTime: 2021-10-22 10:18:11
-->
<template>
  <div class="mb50px">
    <div class="advertisement mb50px"></div>
    <div class="main_box">
      <el-page-header @back="goBack" content="房产信息"> </el-page-header>
      <div class="mb50px">
        <img src="../assets/house3.webp" alt="" />
      </div>
      <el-descriptions
        class="margin-top mb50px"
        title="个人信息"
        :column="3"
        :size="size"
        border
      >
        <template slot="extra">
          <el-button type="primary" size="small">操作</el-button>
        </template>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            姓名
          </template>
          {{ userInfo.popertyOner }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            手机号
          </template>
          18100000000
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            性别
          </template>
          <div style="width: 80px">{{ userInfo.gender }}</div>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-tickets"></i>
            身份证号码
          </template>
          {{ userInfo.inumber }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            联系地址
          </template>
          {{ userInfo.domicilePlace }}
        </el-descriptions-item>
      </el-descriptions>
      <div class="houses_box">
        <div class="clearfix">
          <div class="houses_box_title mb20px">房产信息</div>
        </div>
        <el-table
          :data="tableData"
          stripe
          style="width: 100%; height: 400px"
          :header-cell-style="{
            backgroundColor: 'yellowgreen',
            color: '#ffffff',
          }"
        >
          <el-table-column
            prop="date"
            label="序号"
            type="index"
            width="100"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="houseId"
            label="房产编号"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="popertyOner"
            label="房主姓名"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="sgningTime"
            label="购买时间"
            width="100"
            align="center"
          >
          </el-table-column>

          <el-table-column
            prop="outsideErea"
            label="房屋面积"
            align="center"
            width="80"
          >
          </el-table-column>
          <el-table-column
            prop="insideErea"
            label="套内房屋面积"
            align="center"
            width="110"
          >
          </el-table-column>
          <el-table-column prop="address" label="房屋地址" align="center">
          </el-table-column>
          <el-table-column label="操作" align="center" width="150">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >详情</el-button
              >
              <el-button
                size="mini"
                @click="handleDelete(scope.$index, scope.row)"
                >打印</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
    </div>
  </div>
</template>

<script>
import { queryOneHouse } from "@/api/queryHouse.js";
export default {
  data() {
    return {
      userInfo: {},
      tableData: [],
      inumber: "450924199910215313",
      size: "",
    };
  },
  computed: {},
  methods: {
    goBack() {
      console.log("go back");
      this.$router.push({ path: "/queryHouse" });
    },
    async queryOneHouse() {
      let res = await queryOneHouse({ inumber: this.inumber });
      console.log(res.data, "queryOneHouse");
      this.userInfo = res.data;
      this.tableData = res.data.houses;
    },
  },
  created() {
    this.queryOneHouse();
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
.advertisement {
  height: 400px;
  background: url(../assets/house2.jpg);
  //   background-color:
}
.main_box {
  margin: 0 auto;
  width: 70%;
  //   background: violet;
}
.houses_box {
  .houses_box_title {
    font-size: 16px;
    font-weight: 700;
    line-height: 32px;
    float: left;
  }
}
</style>
