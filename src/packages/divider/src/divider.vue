<template>
  <div :class="getStyle" class="l-divider">
    <div :class="['l-divider-content',`is_${ position }`]" v-bind="$attrs">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import { computed } from "vue";

export default {
  name: "lDivider",
  props: {
    position: {
      type: String,
      default: 'left',
      validator(val) {
        return ['left', 'center', 'right'].includes(val.value)
      }
    },
    theme: {
      type: String,
      default: 'default'
    },
  },
  setup(props) {
    const getStyle = computed(() => {
      return [
        `l-divider-${ props.theme }`,
      ]
    })
    return {
      getStyle
    }
  }
}
</script>
