<template>
  <img alt="Vue logo" src="./assets/lui.png"/>
  <div>3333</div>
  <l-switch></l-switch>
  <!--    <l-button>hhh</l-button>-->
  <l-button size="bin" disabled theme="success" @click="handledClick">确认按钮</l-button>
  <l-button disabled theme="success" @click="handledClick">确认按钮</l-button>
  <l-button theme="success" @click="handledClick">确认按钮</l-button>
  <l-button size="mini" theme="success" @click="handledClick">确认按钮</l-button>
  <l-button size="bin" gradient="success" @click="handledClick">确认按钮</l-button>
  <br>
  <l-button size="bin" disabled theme="primary" @click="handledClick">确认按钮</l-button>
  <l-button disabled theme="primary" @click="handledClick">确认按钮</l-button>
  <l-button theme="primary" @click="handledClick">确认按钮</l-button>
  <l-button size="mini" theme="primary" @click="handledClick">确认按钮</l-button>
  <l-button size="bin" gradient="primary" @click="handledClick">确认按钮</l-button>
  <br>
  <l-button size="bin" disabled theme="subordination" @click="handledClick">确认按钮</l-button>
  <l-button disabled theme="subordination" @click="handledClick">确认按钮</l-button>
  <l-button theme="subordination" @click="handledClick">确认按钮</l-button>
  <l-button size="mini" theme="subordination" @click="handledClick">确认按钮</l-button>
  <l-button size="bin" gradient="subordination" @click="handledClick">确认按钮</l-button>
  <br>
  <l-button size="bin" disabled theme="error" @click="handledClick">确认按钮</l-button>
  <l-button theme="error" disabled @click="handledClick">确认按钮</l-button>
  <l-button theme="error" @click="handledClick">确认按钮</l-button>
  <l-button size="mini" theme="error" @click="handledClick">确认按钮</l-button>
  <l-button size="bin" gradient="error" @click="handledClick">确认按钮</l-button>
  <br>
  <l-button size="bin" disabled theme="warning" @click="handledClick">确认按钮</l-button>
  <l-button theme="warning" disabled @click="handledClick">确认按钮</l-button>
  <l-button theme="warning" @click="handledClick">确认按钮</l-button>
  <l-button size="mini" theme="warning" @click="handledClick">确认按钮</l-button>
  <l-button size="bin" gradient="warning" @click="handledClick">确认按钮</l-button>
  <br>
  <l-button size="bin" disabled theme="dark" @click="handledClick">确认按钮</l-button>
  <l-button disabled theme="dark" @click="handledClick">确认按钮</l-button>
  <l-button theme="dark" @click="handledClick">确认按钮</l-button>
  <l-button size="mini" theme="dark" @click="handledClick">确认按钮</l-button>
  <l-button size="bin" gradient="dark" @click="handledClick">确认按钮</l-button>
  <br>
  <l-button size="bin" gradient="subordination" @click="handledClick">确认按钮</l-button>
  <l-button size="bin" gradient="primary" @click="handledClick">确认按钮</l-button>
  <l-button size="bin" gradient="warning" @click="handledClick">确认按钮</l-button>
  <l-button size="bin" gradient="error" @click="handledClick">确认按钮</l-button>
  <l-button size="bin" gradient="success" @click="handledClick">确认按钮</l-button>
  <l-button size="bin" gradient="dark" @click="handledClick">确认按钮</l-button>
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
