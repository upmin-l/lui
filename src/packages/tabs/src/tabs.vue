<template>
  <div class="l-tabs">
    <div class="l-tabs-nav">
      <div class="l-tabs-nav-item" v-for="item in tabItemLabel">{{item}}</div>
    </div>
    <div class="l-tabs-content">
      <component v-for="item in defaults" :is="item"></component>
    </div>
  </div>
</template>

<script>
import {onMounted} from "vue"
import tabItem from "./tabItem.vue";

export default {
  name: "lTabs",
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  setup(props, context) {
    const defaults = context.slots.default();
    const tabItemLabel = [];
    onMounted(() => {
      defaults.map((v) => {
        if (v.type !== tabItem) {
          throw new Error('parse component failed, "tabs" component expect "<l-tab-item>"')
        }
        tabItemLabel.push(v.props.label);

      })
      console.log(tabItemLabel);
      if (Array.isArray(props.data) && props.data.length >= 0) {
      } else {
        throw new Error('the "data" must be an array of length greater than 1')
      }
    })
    return {
      defaults,
      tabItemLabel
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
</style>
