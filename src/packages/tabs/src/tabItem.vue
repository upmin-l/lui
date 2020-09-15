<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
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
</script>
