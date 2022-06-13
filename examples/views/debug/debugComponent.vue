<template>
  <hr style="border-style: dashed">
  <l-pagination :page-num="pageNum" @page-change="handleClick"  background  :total="200" layout="prev,pager,next"></l-pagination>
<!--  <l-divider theme="success" position="left">123</l-divider>-->
<!--  <l-divider theme="dark" position="center">自满</l-divider>-->
<!--  <l-divider theme="warning" position="left">自负</l-divider>-->
<!--  <l-divider theme="subordination" position="right">自立自主</l-divider>-->
<!--  <l-divider theme="error"  position="left">-->
<!--    <div>456</div>-->
<!--  </l-divider>-->
<!--  <l-divider theme="primary"  position="left">-->
<!--    优雅，永不过时-->
<!--  </l-divider>-->
</template>

<script setup>
import {ref} from "vue";

const pageNum = ref(1)
const handleClick = (val)=>{
  console.log(val);
}
</script>
