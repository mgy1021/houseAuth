<!--
 * @Description: 
 * @Author: Mogy
 * @Date: 2021-10-15 13:43:01
 * @LastEditors: Mogy
 * @LastEditTime: 2021-10-25 18:10:29
-->
<template>
  <div>新闻中心</div>
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
</style>
