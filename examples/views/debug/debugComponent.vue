<template>
  <l-row :gutter="20" class="box">
    <l-col offset="2" :span="8">
      <div class="content">哈哈哈</div>
    </l-col>
    <l-col offset="2" :span="12">
      <div class="content">哈哈哈</div>
    </l-col>
  </l-row>


  <l-row :gutter="40" class="box">
    <l-col :span="12">
      <div class="content">哈哈哈</div>
    </l-col>
    <l-col offset="2" :span="3">
      <div class="content">哈哈哈</div>
    </l-col>
    <l-col :span="6">
      <div class="content">哈哈哈</div>
    </l-col>
  </l-row>
</template>

<script>
export default {
  name: "debugComponent"
}
</script>
<style lang="scss">
.box {
  border-radius: 5px;
  text-align: center;
  margin: 5px auto;
  color: #fff;

  .content {
    height: 40px;
    background-color: rgba(0, 153, 229, .7);
    margin: 1px 0;
    border-radius: 10px;
  }
}
</style>
