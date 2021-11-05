<template>
  <div class="l-row" :style="getRowStyle">
    <slot></slot>
  </div>
</template>

<script>
import { computed, provide } from 'vue'

export default {
  name: "lRow",
  props: {
    gutter: [Number,String],
  },
  setup(props,context) {
    const defaults = context.slots.default();
    console.log(defaults);

    defaults.map((v)=>{
      if (v.type.name !== 'lCol') {
        throw new Error('parse component failed, "lRow" component expect "<l-Col>"')
      }
    })
    const gutter = computed(() => props.gutter);
    const getRowStyle = computed(() => {
      const gutter = `-${ props.gutter / 2 }px`
      if (props.gutter) {
        return {
          marginLeft: gutter,
          marginRight: gutter,
        }
      }
    })

    provide('lRow', {
      gutter,
    })

    return {
      getRowStyle,
    }
  }
}

</script>

<style lang="scss">
.l-row {
  display: flex;
  flex-flow: row wrap;
}
</style>
