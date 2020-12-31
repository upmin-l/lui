<template>
  <div :class="className" class="l-contextMenu-item" @mouseenter="handledMouseenter" @mouseleave="handledMouseleave">
    <div :class="computed_title">
      <span style="padding-right: 8px">{{ is.name }}</span>
      <i v-if="is.children" class="l-contextMenu__expand-icon iconfont icon-icon_expandlistcopy"></i>
    </div>
    <ul v-show="hover" class="l-context-menu" v-if="is.children">
      <li v-for="(item,index) of is.children">
        <context-sub-menu :is="item" :key="index"></context-sub-menu>
      </li>
    </ul>
  </div>
</template>

<script>
import {toRefs, computed, ref, nextTick} from "vue";

export default {
  name: "contextSubMenu",
  props: {
    is: {
      type: Object || Array,
      default: {}
    }
  },
  emits: ['item-click'],
  setup(props, ctx) {
    const {is} = toRefs(props);
    let hover = ref(false);
    const className = computed(() => {
      return {
        'l-context-item__hover': hover.value,
      }
    })
    const computed_title = computed(() => {
      return {
        'l-context-menu-title': hover.value
      }
    })
    const method = {
      handledMouseenter(e) {
        let target = e.target;
        let fromElement = e.fromElement;
        let lastChild = target.lastChild;
        const {width} = target.getBoundingClientRect();
        const {clientHeight, clientWidth} = target.offsetParent;
        nextTick(() => {
          hover.value = true;
          if (lastChild.style) {
            lastChild.style.left = width + 'px';
            lastChild.style.top = -8 + 'px';
          }
        })
      },
      handledMouseleave(e) {
        hover.value = false
      }
    }
    return {
      is,
      hover,
      ...method,
      className,
      computed_title
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
  color: #606266;
  transition: all 250ms;
}

.l-context-item__hover {
  background-color: #ecf5ff;
}

.l-context-item__hover .l-context-menu-title {
  color: #409eff;
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
