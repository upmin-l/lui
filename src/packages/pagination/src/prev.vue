<template>
  <li :class="['l-page-item','l-prev-page',{'l-pageItem-disabled':disabled}]" @click="handledClick">
    <span v-if="text" class="l-page-text" v-text="text"></span>
    <slot v-else  name="pageIcon">
      <i class="l-page-icon"> &lt;</i>
    </slot>
  </li>
</template>

<script setup>
const props = defineProps({
  text: {type: String, default: ""},
  disabled: {type: Boolean, default: false},
});
const emit = defineEmits(["click"]);

const handledClick = () => {
  if (props.disabled) return;
  emit("click", "prev");
};
</script>
