<template>
  <button v-bind="res"
          class="l-button"
          :disabled="is_disabled"
          :class="[is_theme,is_size,{'is_disabled':is_disabled}]"
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
    theme: String,
    gradient: String
  },
  setup(props, context) {
    const is_theme = computed(() => {
      const signArr = ['primary', 'success', 'subordination', 'error', 'warning', 'dark'].find(item => props.gradient === item)
      return signArr ? `l-button-g-${signArr}` : props.theme ? `l-button-${props.theme}` : `l-button-default`
    })
    const is_disabled = computed(() => {
      return !!props.disabled
    })
    const is_size = computed(() => {
      const is_sizeRes = ['bin', 'mini'].find(item => props.size === item)
      return is_sizeRes ? `l-button-${is_sizeRes}` : ''
    })
    const {...res} = context.attrs
    return {
      res,
      is_theme,
      is_disabled,
      is_size
    }
  }
}
</script>
