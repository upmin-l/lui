<template>
  <aside class="layout-aside">
    <div class="layout-container">
      <span class="item-group-title">通用法师法师</span>
      <ul>
        <li class="layout-aside-submenu" v-for="(item,index) of menuData">
          <div class="layout-aside-item-content">
            <div class="layout-aside-item-areas">
              <span>{{ item.chinese }}</span>
              <em>{{ item.name }}</em>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts">
import {reactive} from 'vue'
import component from '../../../components.json'
export default {
  name: "rootLeft",
  setup(){
    let menuData = reactive<Array<object>>([]);
    menuData = [...component]
    return{
      menuData
    }
  }
}
</script>

