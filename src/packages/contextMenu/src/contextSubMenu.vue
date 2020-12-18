<template>
  <div class="l-contextMenu-item" @mouseenter="handledMouseenter" @mouseleave="handledMouseleave">
    <span style="padding-right: 8px">{{ is.name }}</span>
    <i class="l-contextMenu__expand-icon iconfont icon-icon_expandlistcopy"></i>
    <ul v-show="hover" class="l-context-menu" v-if="Array.isArray(is.children)&&is.children.length>0">
      <li v-for="(item,index) of is.children">
        <context-menu-item :is="item"></context-menu-item>
      </li>
    </ul>
  </div>
</template>

<script>
import {toRefs, computed, ref, nextTick} from "vue";
import contextMenuItem from "./contextMenuItem.vue";

export default {
  name: "contextSubMenu",
  props: {
    is: {
      type: Object || Array,
      default: {}
    }
  },
  components: {contextMenuItem},
  setup(props, ctx) {
    const {is} = toRefs(props);
    let hover = ref(false)
    const method = {
      handledMouseenter(e) {
        let target = e.target;
        let fromElement = e.fromElement;
        let lastChild = target.lastChild;
        const {width} = lastChild.getBoundingClientRect()
        const {clientHeight, clientWidth} = target.offsetParent;
        nextTick(() => {
          hover = true
          if (clientWidth + width > fromElement.clientWidth) {
            lastChild.style.right = width + 'px'
          }
          console.log(e);
          console.log(lastChild);
        })

      },
      handledMouseleave(e) {
        hover = false
      }
    }
    return {
      is,
      hover,
      ...method
    }
  }
}
</script>
<style>
.l-contextMenu-item {
  position: relative;
  padding: 1px 15px;
  line-height: 32px;
  cursor: pointer;
  transition: all 250ms;
}

.is_contextMenuSub {
  display: none;
}

/*.l-position {*/
/*  top: -8px;*/
/*  right: -55px;*/
/*}*/
.l-contextMenu__expand-icon {
  position: absolute;
  right: 5px;
  font-size: 18px;
}
</style>
