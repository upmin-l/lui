<template>
  <button v-bind="res"
          class="l-button"
          ref="btn"
          @click="onClick"
          @animationend="onAnimationend"
          :disabled="is_disabled"
          :class="[is_computeTheme,is_size,{'is_disabled':is_disabled},block?'is_block':'',{'is_after':is_after}]"
          type="button">
    <span v-if="icon" :class="icon"></span>
    <span><slot></slot></span>
  </button>
</template>

<script lang="ts">
import {defineComponent, computed, ref} from 'vue'

export default defineComponent(
    {
      name: "lButton",
      inheritAttrs: false,
      props: {
        size: String,
        disabled: {type: Boolean, default: false},
        block: Boolean,
        theme: String,
        gradient: String,
        icon: [String, Array],
        circle: Boolean
      },
      setup(props: any, context: any) {
        const is_after = ref(false)
        const is_computeTheme = computed(() => {
          if (!props.circle) {
            const signArr = ['primary', 'success', 'subordination', 'error', 'warning', 'dark'].find(item => props.gradient === item)
            return signArr ? `l-button-g-${signArr}` : props.theme ? `l-button-${props.theme}` : `l-button-default`
          } else {
            //TODO
            return `is_circle l-button-${props.theme}`
          }
        })
        const is_disabled = computed(() => {
          return !!props.disabled
        })
        const is_size = computed(() => {
          const is_sizeRes = ['bin', 'mini'].find(item => props.size === item)
          return is_sizeRes ? `l-button-${is_sizeRes}` : ''
        })
        const onAnimationend = () => {
          is_after.value = false;
        }
        const onClick = (e:MouseEvent) => {
          if (props.disabled) {
            e.preventDefault()
          }
          is_after.value = true;
        }
        const {...res} = context.attrs
        return {
          res,
          is_computeTheme,
          is_disabled,
          is_size,
          onClick,
          is_after,
          onAnimationend
        }
      }
    }
)
</script>
