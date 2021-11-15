<template>
  <hr style="border-style: dashed">
  <l-divider theme="success" position="left">123</l-divider>
  <l-divider theme="dark" position="center">自满</l-divider>
  <l-divider theme="warning" position="left">自负</l-divider>
  <l-divider theme="subordination" position="right">自立自主</l-divider>
  <l-divider theme="error"  position="left">
    <div>456</div>
  </l-divider>
  <l-divider theme="primary"  position="left">
    优雅，永不过时
  </l-divider>
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
