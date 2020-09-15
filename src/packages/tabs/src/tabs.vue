<template>
  <div class="l-tabs">
    <div class="l-tabs-nav-bar" ref="indicator"></div>
    <div class="l-tabs-nav" ref="navBox">
      <div class="l-tabs-nav-item"
           @click="handledTabsClick($event,item)"
           :class="{'is-tabs--nav-active':item.props.name===value}"
           v-for="(item,index) in defaults" :key="index"
           :ref="el=>{if (item.props.name===value)selectedItem=el}">
        {{ item.props.label }}
      </div>
    </div>
    <div class="l-tabs-content">
      <component class="l-tabs-item" :class="{'is_tabs--active':item.props.name===value}"
                 v-for="(item,index) in defaults" :key="index" :is="item"></component>
    </div>
  </div>
</template>

<script lang="ts">
import {onMounted, ref, watchEffect} from "vue"
import tabItem from "./tabItem.vue";

export default {
  name: "lTabs",
  props: {
    data: {
      type: Array,
      default: []
    },
    value: [String, Number]
  },
  setup(props, context) {
    const defaults = context.slots.default();
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const navBox = ref<HTMLDivElement>(null);
    let sign = 0
    let newLabel = null;
    let newName = null;
    if (Array.isArray(props.data) && props.data.length >= 0) {
    } else {
      throw new Error('the "data" must be an array of length greater than 1')
    }
    defaults.map((v) => {
      if (v.type !== tabItem) {
        throw new Error('parse component failed, "tabs" component expect "<l-tab-item>"')
      }
      /*      if (!v.props && (v.props.label || v.props.name)) {
              v.props.label = v.props.label ? newLabel = v.props.label : newLabel + sign++;
              v.props.name = v.props.name ? newName = v.props.name : newName + sign++;
            }*/
    })

    onMounted(() => {
      watchEffect(() => {
        const {width, left: divScreenItemLeft} = selectedItem.value.getBoundingClientRect();
        const {left: navBoxLeft} = navBox.value.getBoundingClientRect();
        indicator.value.style.width = width + 'px'
        console.log(navBoxLeft, divScreenItemLeft);
        indicator.value.style.left = divScreenItemLeft - navBoxLeft + 'px'
      })
    })


    const handledTabsClick = (e, val) => {
      context.emit('update:value', val.props.name)
      context.emit("tabsClick", e, val.props.name)
    }

    return {
      defaults,
      handledTabsClick,
      indicator,
      navBox,
      selectedItem
    }
  }
}
</script>
<style>
.l-tabs {
  position: relative;
  overflow: hidden;
  color: #515a6e;
  zoom: 1;
}

.l-tabs-nav {
  display: flex;
  width: 100%;
}

.l-tabs-nav-item {
  height: 100%;
  margin-right: 15px;
  padding: 12px 15px;
  text-decoration: none;
  cursor: pointer;
  transition: color .3s cubic-bezier(.645, .045, .355, 1);
}

.l-tabs-content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: left;
}

.l-tabs-item {
  height: 0;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  position: relative;
  font-size: 15px;
  line-height: 28px;
  width: 0;
  transform: scale(0.9);
  transition: all .3s ease-in;
  filter: blur(2px);
  z-index: 9;
}

.is_tabs--active {
  height: auto;
  overflow: auto;
  transition-delay: 250ms;
  width: auto;
  opacity: 1;
  filter: blur(0);
  visibility: visible;
  transform: scale(1);
}

.is-tabs--nav-active {
  color: #2c81db;
}

.l-tabs-nav-bar {
  position: absolute;
  height: 2px;
  width: 80px;
  background-color: #2c81db;
  transition: all 250ms;
}
</style>
