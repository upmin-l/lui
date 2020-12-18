<template>
  <ul class="l-context-menu">
      <li v-for="item in menuData">
        <context-sub-menu v-if="Array.isArray(item.children)&&item.children.length>0"
                          :is="item">
        </context-sub-menu>
        <context-menu-item @item-click="itemClick($event,item)" v-else :is="item"></context-menu-item>
      </li>
  </ul>
</template>
<script>
import contextMenuItem from "./contextMenuItem.vue";
import contextSubMenu from "./contextSubMenu.vue";
import {reactive, toRefs, getCurrentInstance} from 'vue'

export default {
  name: "lContextMenu",
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  emits: ['item-click'],
  components: {contextMenuItem, contextSubMenu},
  setup(props, ctx) {
    const {attrs} = ctx;
    let options = {...attrs};
    let dataOption = reactive([])

    if (!options.data) {
      options.data = toRefs(props.data)
    }


    dataOption = options.data;
    const menuData = [];
    for (let i in dataOption) {
      menuData.push(dataOption[i].value);
    }

    function handledMouseMove() {
      console.log(22);
    }
    function itemClick(e,data) {
      console.log(data);
      e.stopPropagation();

    }
    return {
      handledMouseMove,
      menuData,
      itemClick
    }
  }
}
</script>
<style>
.l-context-menu {
  position: absolute;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  border-radius: 4px;
  padding: 8px 0;
  background-color: #fff;
}


.l-context-menu div:hover {
  background-color: #ecf5ff;
  color: #409eff;
  /*transition: all frames()*/
}
</style>
