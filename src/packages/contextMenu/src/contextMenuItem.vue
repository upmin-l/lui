<template>
  <div @click="itemClick" class="l-contextMenu-item">
    <slot>
      <span style="padding-right: 8px">{{ is.name }}</span>
    </slot>
  </div>
</template>

<script>

import {toRefs} from "vue";
export default {
  name: "lContextMenuItem",
  props: {
    is: {
      type: Object||Array,
      default: {}
    }
  },
  directives:{},
  emits: ['item-click'],
  setup(props, ctx) {
    const {is} = toRefs(props);

    function itemClick(e) {
      e.stopPropagation();
      ctx.emit('item-click',e,is);
    }

    return {
      itemClick,
      is
    }
  }
}
</script>

