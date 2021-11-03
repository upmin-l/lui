<template>
  <component v-for="(item,index) of $slots.default()"  :is="item" :key="index"></component>
<!--  <slot></slot>-->
</template>

<script>
export default {
  name: "ComponentDemos",
  setup(props, ctx) {
    console.log({...ctx.slots.default()});
  }
}
</script>

