<template>
  <ul class="l-context-menu">
    <li v-for="item in menuData">

      <context-sub-menu
                        @item-click="itemClick"
                        :is="item">
      </context-sub-menu>
<!--      <context-menu-item @item-click="itemClick" v-else :is="item"></context-menu-item>-->
    </li>
  </ul>
</template>
<script>
import contextMenuItem from "./contextMenuItem.vue";
import contextSubMenu from "./contextSubMenu.vue";
import {reactive, toRefs} from 'vue'

export default {
  name: "lContextMenu",
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  emits: ['item-click'],
  // directives: {
  //   contextMenu: {
  //     mounted(el, bing, v_node) {
  //       const parentNode = el.parentNode;
  //       parentNode.addEventListener('contextmenu', function (e) {
  //         e.preventDefault();
  //         el.style.display = 'block'
  //         el.style.left = e.pageX + 'px'
  //         el.style.top = e.pageY + 'px'
  //
  //       })
  //     }
  //   },
  // },
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
    for (let i in dataOption) menuData.push(dataOption[i].value);


    function handledMouseMove() {
      console.log(22);
    }

    function itemClick(e, data) {
      console.log(data);
      ctx.emit('item-click', e, data)
    }

    const addClass = () => {

    }
    return {
      handledMouseMove,
      menuData,
      itemClick,
      addClass
    }
  },
  methods: {
    getAdd() {

    }
  }
}
</script>
<style>
.l-context-menu {
  position: absolute;
  min-width: 120px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  border-radius: 4px;
  padding: 8px 0;
  background-color: #fff;
}


/*.l-context-item-hover*/
/*.l-context-menu div:hover {*/
/*  background-color: #ecf5ff;*/
/*  color: #409eff;*/
/*  !*transition: all frames()*!*/
/*}*/
</style>
