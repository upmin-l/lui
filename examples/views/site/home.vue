<template>
  <div class="layout">
    <root-left></root-left>
    <div class="example-content">
      <router-view></router-view>
<!--      <l-tabs position="button" :navBarColor="['#FEB692','#EA5455']" v-model:value="activeName" @tabsClick="handledTabsClick">-->
<!--        <l-tab-item label="表情1" name="1">-->
<!--          <p> Single-origin coffee tilde craft beer organic wolf. Plaid kickstarter vegan roof party vice, try-hard-->
<!--            taxidermy truffaut small batch. PBR&B butcher helvetica, green juice craft beer kickstarter skateboard. +1-->
<!--            selvage VHS gastropub slow-carb, twee vegan helvetica farm-to-table marfa seitan letterpress narwhal squid-->
<!--            cliche. Meggings fap leggings slow-carb kickstarter, health goth gastropub hashtag blue bottle photo booth-->
<!--            literally PBR&B iPhone ugh. Organic scenester truffaut pug, pitchfork man bun artisan brooklyn photo booth.-->
<!--            Biodiesel farm-to-table 8-bit direct trade humblebrag, man braid blue bottle.</p>-->

<!--        </l-tab-item>-->
<!--        <l-tab-item label="标签5646546542" name="2">-->
<!--          <p>-->
<!--            不得不承认，computed这个强大功能的实现果然少不了内部非常复杂的实现，这个双向依赖收集的套路相信也会给各位小伙伴带来很大的启发。跟着尤大学习，果然有肉吃！-->
<!--            另外由于@vue/reactivity的框架无关性，我把它整合进了React，做了一个状态管理库，可以完整的使用上述的computed等强大的Vue3能力。-->
<!--          </p>-->
<!--        </l-tab-item>-->
<!--        <l-tab-item label="3" name="3">-->
<!--          <l-button theme="success">确定</l-button>-->
<!--          <l-button theme="primary">确定</l-button>-->
<!--          <l-button theme="subordination">确定</l-button>-->
<!--        </l-tab-item>-->
<!--      </l-tabs>-->
    </div>
  </div>
</template>

<script lang="ts">
import rootLeft from "./rootLeft.vue";
import {defineComponent,ref} from 'vue'
export default defineComponent({
  name: "home",
  components: {rootLeft},
  setup() {
    const activeName = ref('1')
    const handledTabsClick = (val)=>{
      console.log(val);
    }
    return{
      activeName,
      handledTabsClick
    }
  }
})
</script>
