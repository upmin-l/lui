<template>
  <li class="l-contextMenu-item">
    <span>{{ is.name }}</span>
    <ul class="l-context-menu l-position" v-if="Array.isArray(is.children)&&is.children.length>0">
      <li v-for="(item,index) of is.children">
        {{ computedItem(item) }}
      </li>
    </ul>
  </li>
</template>

<script>
import {toRefs, ref, render, h} from 'vue'
import {createComponent} from "../../../utils/component";
import contextMenu from "./contextMenu.vue";

export default {
  name: "lContextMenuSubMenu",
  props: {
    is: {
      type: Object,
      default: {}
    }
  },
  setup(props, ctx) {
    const {is} = toRefs(props);

    function computedItem(val) {
      if (Array.isArray(val.children) && val.children.length > 0) {
        computedItem(val.children)
      } else {
        let _node = createComponent(contextMenu,{name:val.name})
        console.log(_node);
      }
    }


    return {
      is,
      computedItem,
    }
  }
}
</script>

<style>
.l-contextMenu-item {
  position: relative;
}

.l-position {
  top: -8px;
  right: -55px;
}
</style>
