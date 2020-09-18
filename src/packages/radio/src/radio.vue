<template>
  <label class="l-radio">
    <input class="l-radio-input" type="radio" @change="radioChange">
    <span>
      <i class="l-radio-inner"></i>
      <span><slot></slot></span>
    </span>
  </label>
</template>

<script>
import {defineComponent,toRefs, getCurrentInstance, computed} from "vue"

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
      setup(props) {
        const {value, label} = toRefs(props);
        const radioChange = () => {
          console.log(value.value);
        }

        return {
          radioChange
        }
      }
    }
)

function manageModel() {
  const {emit} = getCurrentInstance();
  const model = computed({
    get() {
    },
    set() {

    }
  })
}
</script>
