<template>
  <div class="l-context-menu">
    <ul>
      <context-menu-sub-menu v-for="item of options.data" :is="item"></context-menu-sub-menu>
    </ul>
  </div>
</template>
<script>
import contextMenuSubMenu from "./contextMenuSubMenu.js";
import {reactive,toRefs,getCurrentInstance} from 'vue'

export default {
  name: "lContextMenu",
  props: {
    data:{
      type:Array,
      default:[]
    }
  },
  components: {contextMenuSubMenu},
  setup(props, ctx) {
    const {attrs} = ctx;
    let options =reactive({...attrs});
    if (!options.data){
      options.data = toRefs(props.data)
    }
    function handledMouseMove() {
      console.log(22);
    }
    return {
      handledMouseMove,
      options
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

.l-context-menu li {
  padding: 1px 15px;
  line-height: 32px;
  cursor: pointer;
  transition: all 250ms;
}

.l-context-menu li:hover {
  background-color: #ecf5ff;
  color: #409eff;
}
</style>
