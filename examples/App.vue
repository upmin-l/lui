<template>
  <!--  <img alt="Vue logo" src="./assets/lui.png"/>-->
  <div>{{ switchValue }}</div>
  <l-radio @change="radioChange">默认</l-radio>
  <l-radio>备选项</l-radio>
  <l-switch
      v-model:value="switchValue"
      @change="handledChang"
      :show-name="['开','关']"></l-switch>
  <div ref="aa" class="a-block-box">
    <div class="block-box">
      <l-tabs style="width: 500px" v-model:value="activeName" @tabsClick="handledTabsClick">
        <l-tab-item label="表情1" name="1">
          <p>
            Single-origin coffee tilde craft beer organic wolf. Plaid kickstarter vegan roof party vice, try-hard
            taxidermy truffaut small batch. PBR&B butcher helvetica, green juice craft beer kickstarter skateboard. +1
            selvage VHS gastropub slow-carb, twee vegan helvetica farm-to-table marfa seitan letterpress narwhal squid
            cliche. Meggings fap leggings slow-carb kickstarter, health goth gastropub hashtag blue bottle photo booth
            literally PBR&B iPhone ugh. Organic scenester truffaut pug, pitchfork man bun artisan brooklyn photo booth.
            Biodiesel farm-to-table 8-bit direct trade humblebrag, man braid blue bottle.
          </p>
        </l-tab-item>
        <l-tab-item label="标签2" name="2">
          <p>cliche. Meggings fap leggings slow-carb kickstarter, health goth gastropub hashtag blue bottle photo booth
            literally PBR&B iPhone ugh. Organic scenester truffaut pug, pitchfork man bun artisan brooklyn photo booth.
            Biodiesel farm-to-table 8-bit direct trade humblebrag, man braid blue bottle.</p>
          <l-button theme="success" icon="iconfont icon-d" @click="handledClick" circle></l-button>
          <l-button theme="error" icon="iconfont icon-d" @click="handledClick" circle></l-button>
          <l-button theme="warning" icon="iconfont icon-bianji1" @click="handledClick" circle></l-button>
          <l-button theme="primary" icon="iconfont icon-tubiaozhizuomoban" @click="handledClick" circle></l-button>
          <l-button theme="subordination" icon="iconfont icon-jigui" @click="handledClick" circle></l-button>
          <l-button theme="dark" icon="iconfont icon-shebeijieruwangguanxinxi" @click="handledClick" circle></l-button>
        </l-tab-item>
        <l-tab-item label="标签3" name="3">
          <p>
            不得不承认，computed这个强大功能的实现果然少不了内部非常复杂的实现，这个双向依赖收集的套路相信也会给各位小伙伴带来很大的启发。跟着尤大学习，果然有肉吃！
            另外由于@vue/reactivity的框架无关性，我把它整合进了React，做了一个状态管理库，可以完整的使用上述的computed等强大的Vue3能力。
          </p>
        </l-tab-item>
      </l-tabs>
    </div>
  </div>
  <div>
    <l-button theme="success" icon="iconfont icon-d" @click="handledClick" circle></l-button>
    <l-button theme="error" icon="iconfont icon-d" @click="handledClick" circle></l-button>
    <l-button theme="warning" icon="iconfont icon-bianji1" @click="handledClick" circle></l-button>
    <l-button theme="primary" icon="iconfont icon-tubiaozhizuomoban" @click="handledClick" circle></l-button>
    <l-button theme="subordination" icon="iconfont icon-jigui" @click="handledClick" circle></l-button>
    <l-button theme="dark" icon="iconfont icon-shebeijieruwangguanxinxi" @click="handledClick" circle></l-button>
  </div>
  <div>{{ a }}</div>
  <br>
<!--  <l-dialog :headerIcon="['iconfont icon-d','#f60']" title="创建组件">-->
<!--    <l-button theme="success" icon="iconfont icon-d" @click="handledClick" circle></l-button>-->
<!--    <l-button theme="error" icon="iconfont icon-d" @click="handledClick" circle></l-button>-->
<!--    <l-button theme="warning" icon="iconfont icon-bianji1" @click="handledClick" circle></l-button>-->
<!--    <l-button theme="primary" icon="iconfont icon-tubiaozhizuomoban" @click="handledClick" circle></l-button>-->
<!--    <l-button theme="subordination" icon="iconfont icon-jigui" @click="handledClick" circle></l-button>-->
<!--    <l-button theme="dark" icon="iconfont icon-shebeijieruwangguanxinxi" @click="handledClick" circle></l-button>-->
<!--    <template v-slot:footer>-->
<!--      <l-button theme="error" icon="iconfont icon-d" @click="handledClick" circle></l-button>-->
<!--      <l-button theme="success" icon="iconfont icon-d" @click="handledClick" circle></l-button>-->
<!--    </template>-->
<!--  </l-dialog>-->
</template>
<script>

import {computed, ref} from 'vue'

export default {
  name: 'App',


  setup(props, context) {
    let a = ref(1)
    let activeName = ref('1')
    let switchValue = ref(false)
    const handledClick = (e) => {
      a.value++
      // console.log(a);
    };
    const handledChang = (val, e) => {
      // console.log(val);

    }
    const radioChange = (val) => {
      console.log(val);
    }
    const handledTabsClick = (val, name) => {
      // console.log(name);
    }
    return {
      handledClick,
      a,
      switchValue,
      handledChang,
      radioChange,
      activeName,
      handledTabsClick
    }
  }

}
</script>
<style>
.a-block-box {
  width: 900px;
  margin: 0 auto;
  overflow: hidden;
}

.block-box {
  float: left;
  width: 400px;
  margin: 0 10px;
}

p {
  padding: 0;
  margin: 0;
}
</style>
