<template>
  <aside class="layout-aside">
    <div class="layout-container">
      <span class="item-group-title">通用法师法师</span>
      <ul>
        <li class="layout-aside-submenu" v-for="(item,index) of menuData" @click="handleMenuClick(item)">
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
import {useRouter} from 'vue-router'

export default {
  name: "rootLeft",
  setup() {
    let menuData = reactive<Array<object>>([]);
    menuData = [...component]
    const router = useRouter();
    const methods = {
      handleMenuClick(item) {
        router.push(`/home/${item.name}`)
      }
    }
    return {
      menuData,
      ...methods
    }
  }
}
</script>

