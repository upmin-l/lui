<template>
  <div :class="getColClass" :style="getColStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, inject} from 'vue'

export default defineComponent({
  name: "lCol",
  props: {
    span: {
      type: [Number, String],
      default: 24
    },
    offset: {
      type:[Number, String],
      default:''
    }
  },
  setup(props) {
    const basClass = 'l-col'
    const {gutter} = inject('lRow', {gutter: {value: 0}})
    const getColStyle = computed(() => {
      if (gutter) {
        return {
          paddingLeft: `${gutter.value / 2}px`,
          paddingRight: `${gutter.value / 2}px`,
        }
      }
    })

    const getColClass = computed(() => {
      const classList = [basClass];
      (['span', 'offset'] as const) .forEach(item => {
        if (props[item] || props[item] === 0) {
          classList.push(`${basClass}-${item}__${props[item]}`);
        }
      })
      return classList
    })
    return {
      getColStyle,
      getColClass
    }
  }
})
</script>
