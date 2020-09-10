<template>
  <img alt="Vue logo" src="./assets/lui.png"/>
  <div>{{ switchValue }}</div>
  <l-switch v-model:value="switchValue" @change="handledChang" :show-name="['开启','关闭']" open-value="44" close-value="100"></l-switch>
  <!--    <l-button>hhh</l-button>-->
  <l-button size="bin" disabled theme="success" @click="handledClick">确认按钮</l-button>
  <l-button disabled theme="success" @click="handledClick">确认按钮</l-button>
  <l-button theme="success" @click="handledClick">确认按钮</l-button>
  <l-button size="mini" theme="success" @click="handledClick">确认按钮</l-button>
  <l-button size="bin" gradient="success" @click="handledClick">确认按钮</l-button>
  <l-button @click="handledClick">确认按钮</l-button>
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
 <div ref="aa" class="a-block-box">
   <div class="block-box">
     <l-button size="bin" theme="subordination" block @click="handledClick">确认按钮</l-button>
     <l-button size="bin" theme="primary" block @click="handledClick">确认按钮</l-button>
     <l-button size="bin" theme="warning" block @click="handledClick">确认按钮</l-button>
     <l-button size="bin" theme="error" block @click="handledClick">确认按钮</l-button>
     <l-button size="bin" theme="success" block @click="handledClick">确认按钮</l-button>
     <l-button size="bin" class="iconfont icon-d" block theme="dark"  @click="handledClick">确认按钮</l-button>
   </div>
 </div>
  <div>
    <l-button  theme="success" icon="iconfont icon-d" @click="handledClick" circle></l-button>
    <l-button theme="error" icon="iconfont icon-d" @click="handledClick" circle></l-button>
    <l-button theme="warning" icon="iconfont icon-bianji1" @click="handledClick" circle></l-button>
    <l-button theme="primary" icon="iconfont icon-tubiaozhizuomoban" @click="handledClick" circle></l-button>
    <l-button theme="subordination" icon="iconfont icon-jigui" @click="handledClick" circle></l-button>
    <l-button theme="dark" icon="iconfont icon-shebeijieruwangguanxinxi" @click="handledClick" circle></l-button>
  </div>
  <div>{{ a }}</div>
  <br>
  <l-radio></l-radio>
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
    let switchValue = ref(false)
    const handledClick = (e) => {
      a.value++
      // console.log(a);
    };
    const handledChang = (val,e)=>{
      console.log(val);

    }
    return {
      handledClick,
      a,
      switchValue,
      handledChang
    }
  }

}
</script>
<style >
.a-block-box{
  width: 900px;
  margin: 0 auto;
  overflow: hidden;
}
.block-box{
  float: left;
  width: 400px;
  margin: 0 10px;
}
</style>
