<template>
  <button class="l-switch" @click="switchClick" :class="{'l-switch-checked':isChecked}"
          :style="{backgroundColor:isChecked?trueBackground:falseBackground}">
    <span class="l-switch-inner">
      {{ value ? showName[0] : showName[1] }}
    </span>
  </button>
</template>

<script lang="ts">
import {computed, toRefs, onMounted} from "vue"

export default {
  name: "lSwitch",
  emits: ['update:value', 'change'],
  props: {
    value: Boolean,
    showName: {
      validator(value) {
        return Array.isArray(value) && value.length === 2
      }
    },
    openValue: {
      type: [String, Boolean, Number],
      default: true
    },
    closeValue: {
      type: [String, Boolean, Number],
      default: false
    },
    trueBackground: String,
    falseBackground: String
  },
  setup(props, context) {
    const {value, openValue, closeValue} = toRefs(props);

    normalize({value, openValue, closeValue, emit: context.emit})
    const isChecked = computed(() => {
      return value.value === openValue.value
    })
    const useClick = ({isChecked, closeValue, openValue, disabled, emit}) => {
      const getNewValue = () => {
        return isChecked.value ? closeValue.value : openValue.value
      }
      const switchClick = () => {
        const newValue = getNewValue();
        emit('update:value', newValue)
        emit('change', newValue)
      }
      return {
        switchClick
      }
    }
    const {switchClick} = useClick({
      isChecked,
      closeValue,
      openValue,
      disabled: false,
      emit: context.emit
    })

    return {
      switchClick,
      isChecked
    }
  }
}
const normalize = ({value, openValue, closeValue, emit}) => {
  onMounted(() => {
    if (value.value !== openValue.value && value.value !== closeValue.value) {
      emit('update:value', closeValue.value)
    }
  })
}
</script>


