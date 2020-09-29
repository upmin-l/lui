<template>
  <div>
    <l-button theme="success">确定</l-button>
    <l-button theme="primary">确定</l-button>
    <l-button theme="subordination">确定</l-button>
    <l-button theme="error">确定</l-button>
    <l-button theme="error">确定</l-button>
    <br>
    <l-radio v-model:value="radio1" label="1">确定</l-radio>
    <l-radio v-model:value="radio1" label="2">确定</l-radio>
  </div>
</template>
<script>
import {ref} from 'vue'

export default {
  name: 'App',
  setup() {
    const radio1 = ref();
    return{
      radio1
    }
  }
}
</script>
<style>
#app {
  text-align: center;
}
</style>
