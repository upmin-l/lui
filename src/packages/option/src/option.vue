<template>
  <li class="l-select-dropdown__item">
    <span v-if="icon" class="l-select-item__icon" :class="icon"></span>
    <span v-if="imgUrl" class="l-select-item__img" :style="{backgroundImage:'url('+`${imgUrl}`+')'}"></span>
    <span style="padding-left: 10px"><slot></slot></span>
  </li>
</template>

<script>
import {toRefs} from "vue"

export default {
  name: "lOption",
  props: {
    icon: String,
    imgUrl: String
  },
  setup(props) {
    let {icon, imgUrl} = toRefs(props)
    if (icon) imgUrl = ''
    return {
      icon,
      imgUrl
    }
  }
}
</script>
<style>
.l-select-item__icon {
  position: absolute;
  left: 0;
  display: inline-block;
  margin: 0 5px;
}

.l-select-item__img {
  position: absolute;
  left: 0;
  top: 8px;
  width: 16px;
  height: 16px;
  margin: 0 5px;
  background-size: cover;
}
</style>


