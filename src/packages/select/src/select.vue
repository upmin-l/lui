<template>
  <div class="l-select" :style="{width:width+'px'}">
    <div class="l-select-box">
      <label class="l-select-placeholder">
        <input @click="onFocus($event)" class="l-select-input" readonly :placeholder="placeholder||'请选择'" type="text">
      </label>
      <span class="l-select-icon iconfont icon-bianji1"></span>
    </div>
    <div class="l-select-dropdown-box">
      <div v-show="controlList" class="l-select-list">
        <ul>
          <component v-for="(item,index) of defaults" :key="index" :is="item"></component>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import focus from '../../../utils/directives/select_directive'
import {ref} from "vue"

export default {
  name: "lSelect",
  props: {
    placeholder: String,
    width: {
      type: String || Number,
      default: 200
    }
  },
  emits: ['focus'],
  directives: {focus},
  setup(props, context) {
    const defaults = context.slots.default();
    let controlList = ref(false)

    function onFocus(el) {
      controlList.value = !controlList.value
      context.emit('focus', el);
    }

    return {
      defaults,
      onFocus,
      controlList
    }
  }
}
</script>

<style>
.l-select {
  position: relative;
  width: 100%;
  min-height: 36px;
}

.l-select-box {
  position: relative;
  display: block;
  width: 100%;
}

.l-select-input:focus {
  border: 1px solid red;
}

.l-select-input {
  display: inline-block;
  width: 100%;
  height: 36px;
  line-height: 36px;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  color: #606266;
  padding: 0 30px 0 15px;
  font-size: inherit;
  outline: none;
  cursor: pointer;
  transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
}

.l-select-icon {
  position: absolute;
  height: 100%;
  right: 5px;
  font-size: 14px;
  top: 0;
  text-align: center;
  color: #c0c4cc;
  transition: all .3s;
  line-height: 36px;
  pointer-events: none;
}

.l-select-dropdown-box {
  position: absolute;
  overflow: auto;
  min-width: 200px;
  width: 100%;
  will-change: top, left;
  transform-origin: center top;
  top: 32px;
  left: 0;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  margin: 5px 0;
}

.l-select-list {
  padding: 3px 10px;
}

.l-select-list ul {
  list-style: none;
  padding: 6px 0;
  margin: 0;
}
</style>
