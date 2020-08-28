<template>
  <img alt="Vue logo" src="./assets/lui.png"/>
  <div>3333</div>
  <l-switch></l-switch>
  <!--    <l-button>hhh</l-button>-->
  <l-button size="abc" disabled theme="success" @click="handledClick"></l-button>
  <l-button size="abc" disabled theme="primary" @click="handledClick"></l-button>
  <l-button size="abc" theme="primary" @click="handledClick"></l-button>
  <l-button size="abc" theme="subordination" @click="handledClick"></l-button>
  <l-button size="abc" theme="error" @click="handledClick"></l-button>
  <l-button size="abc" theme="warning" @click="handledClick"></l-button>
  <div>{{ a }}</div>
</template>

<script>
import {lButton} from '../src'
import {computed, ref} from 'vue'

export default {
  name: 'App',
  components: {
    lButton
  },

  setup(props, context) {
    let a = ref(1)
    const sign = computed(() => {

    })
    const handledClick = () => {
      a.value++
      console.log(a);
    };
    return {
      handledClick,
      a
    }
  }

}
</script>
