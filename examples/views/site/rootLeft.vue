<template>
  <aside class="layout-aside">
    <div class="layout-container">
      <span class="item-group-title">通用直接</span>
      <ul>
        <li class="layout-aside-submenu">
          <div class="layout-aside-item-content">
            <span>按钮</span>
            <em>button</em>
          </div>
        </li>
        <li class="layout-aside-submenu">
          <div class="layout-aside-item-content">
            <span>button</span>
          </div>
        </li>
        <li class="layout-aside-submenu">
          <div class="layout-aside-item-content">
            <span>button</span>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts">
export default {
  name: "rootLeft",
  setup(){
    const menuData = []
    fetch('../../../components.json').then((res)=>{
      res.json().then((menuData)=>{
        console.log(menuData);
      })
    })
  }
}
</script>

