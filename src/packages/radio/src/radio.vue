<template>
  <label class="l-radio">
    <input class="l-radio-input" v-model="modelValue" type="radio" @change="radioChange">
    <span>
      <i class="l-radio-inner"></i>
      <span><slot></slot></span>
    </span>
  </label>
</template>

<script lang="ts">
import {defineComponent, toRefs, getCurrentInstance, computed, unref} from "vue"

export default defineComponent(
    {
      name: "lRadio",
      props: {
        value: [String, Number, Boolean],
        label: {
          type: [String, Number, Boolean, Symbol],
          default: false
        }
      },
      emits: ['update:value', 'change'],
      setup(props, context) {
        const {value, label} = toRefs(props);
        const modelValue = manageModel(value)
        const radioChange = () => {
          console.log(value);
          context.emit("update:value", value)
        }

        return {
          radioChange,
          modelValue
        }
      }
    }
)

function manageModel(modelValue) {
  const {emit} = getCurrentInstance();
  const model = computed({
    get() {
      return unref(modelValue)
    },
    set(val) {
      emit("update:value", val)
    }
  })

  return {model}
}
</script>
