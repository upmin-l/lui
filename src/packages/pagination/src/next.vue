<template>
  <li :class="['l-page-item','l-prev-page',{'l-pageItem-disabled':disabled}]" @click="handledClick">
    <span v-if="text" class="l-page-text" v-text="text"></span>
    <i v-else class="l-page-icon"> > </i>
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
  emit("click", "next");
}
</script>

