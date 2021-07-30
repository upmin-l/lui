<template>
  <div class="layout-header">
    <div class="layout-header-logo">
      <img src="../../assets/logo.svg" alt="lui">
      <span>vite</span>
    </div>
    <div class="layout-header-nav">
      <ul class="layout-header-nav-menu">
        <li>首页</li>
        <li>文档</li>
        <li>组件</li>
        <l-button theme="subordination" >FQA</l-button>
        <l-button theme="subordination" >FQA</l-button>
        <l-button theme="subordination" >FQA</l-button>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "rootHeader",
  setup() {
    let activeName = ref('2');
    const handledTabsClick = (val, name) => {
      console.log(val, name);
    }
    return {
      activeName,
      handledTabsClick
    }
  }
}
</script>

