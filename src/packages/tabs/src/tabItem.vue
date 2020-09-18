<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import {defineComponent} from "vue"

export default defineComponent(
    {
      name: "lTabItem",
      props: {
        label: {
          type: [String, Number],
          default: '1'
        },
        name: {
          type: [String, Number],
          default: '1'
        }
      }
    }
)
</script>
