<template>
  <button v-bind="res"
          class="l-button"
          :disabled="is_disabled"
          :class="[is_theme,{'is_disabled':is_disabled}]"
          type="button">
    <span><slot>button</slot></span>
  </button>
</template>

<script>
import {computed} from 'vue'

export default {
  name: "lButton",
  props: {
    size: String,
    disabled: {
      type: Boolean,
      default: false
    },
    theme: String
  },
  inheritAttrs: false,
  setup(props, context) {
    const is_theme = computed(() => {
      return props.theme ? `l-button-${props.theme}` : `l-button-default`
    })
    const is_disabled = computed(() => {
      return !!props.disabled
    })
    const {...res} = context.attrs
    return {
      res,
      is_theme,
      is_disabled
    }
  }
}
</script>
