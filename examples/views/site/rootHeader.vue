<template>
  <div class="layout-header">
    <div class="layout-header-logo">
      <img src="../../assets/logo.svg" alt="lui">
      <span>vite</span>
    </div>
    <div class="layout-header-nav">
      <ul class="layout-header-nav-menu">
        <li>首页</li>
        <li>gg</li>
        <li>方法</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { lButton } from '../../../src/index'

export default {
  name: "rootHeader",
  components: {
    lButton
  },
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

