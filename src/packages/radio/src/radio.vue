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
        const {value, label}:any = toRefs(props);
        const modelValue = manageModel(value)
        console.log(modelValue);
        const radioChange = () => {
          context.emit("update:value", value)
        }

        return {
          radioChange,
          modelValue
        }
      }
    }
)

function manageModel(modelValue: string | number | boolean) {
  const {emit}: any = getCurrentInstance();
  const model = computed({
    get() {
      console.log(modelValue);
      return unref(modelValue)
    },
    set(val) {
      console.log(val);
      emit("update:value", val)
    }
  })

  return {model}
}
</script>
