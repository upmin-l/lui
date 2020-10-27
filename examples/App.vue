<template>
  <div>
    <l-button theme="success" @click="handledClick">确定</l-button>
    <l-button theme="primary" @click="handledRefClick">确定</l-button>
    <l-button theme="subordination">确定</l-button>
    <l-button size="mini" theme="error">确定按鈕</l-button>
    <l-button theme="warning">确定</l-button>
    <br>
    <l-radio v-model:value="radio1" label="1">确定</l-radio>
    <l-radio v-model:value="radio1" label="2">确定</l-radio>
    <l-tabs v-model:value="activeName" @tabsClick="handledTabsClick">
      <l-tab-item label="表情1" name="1">
        <p> Single-origin coffee tilde craft beer organic wolf. Plaid kickstarter vegan roof party vice, try-hard
          taxidermy truffaut small batch. PBR&B butcher helvetica, green juice craft beer kickstarter skateboard. +1
          selvage VHS gastropub slow-carb, twee vegan helvetica farm-to-table marfa seitan letterpress narwhal squid
          cliche. Meggings fap leggings slow-carb kickstarter, health goth gastropub hashtag blue bottle photo booth
          literally PBR&B iPhone ugh. Organic scenester truffaut pug, pitchfork man bun artisan brooklyn photo booth.
          Biodiesel farm-to-table 8-bit direct trade humblebrag, man braid blue bottle.</p>
      </l-tab-item>
      <l-tab-item label="标签5646546542" name="2">
        <p>
          不得不承认，computed这个强大功能的实现果然少不了内部非常复杂的实现，这个双向依赖收集的套路相信也会给各位小伙伴带来很大的启发。跟着尤大学习，果然有肉吃！
          另外由于@vue/reactivity的框架无关性，我把它整合进了React，做了一个状态管理库，可以完整的使用上述的computed等强大的Vue3能力。
        </p>
      </l-tab-item>
      <l-tab-item label="3" name="3">
        <l-button theme="success">确定</l-button>
        <l-button theme="primary">确定</l-button>
        <l-button theme="subordination">确定</l-button>
      </l-tab-item>
    </l-tabs>
    <l-dialog v-model:visible="dialog" :headerIcon="['iconfont icon-d','#f60']" title="创建组件">
      <l-button theme="success">确定</l-button>
      <l-button theme="primary">确定</l-button>
      <l-button theme="subordination">确定</l-button>
      <l-button theme="error">确定</l-button>
      <l-button theme="warning">确定</l-button>
    </l-dialog>
    <div ref="box">12312</div>
    <!--    <l-alert theme="error" closable showIcon icon="icon-bianji1" rear-content="知道了"-->
    <!--             @close="handledTabsClick">-->
    <!--      <template v-slot:title>可以完整的使用上述的computed等强大的Vue3能力。-->
    <!--        <l-button theme="error" size="mini">确定</l-button>-->
    <!--      </template>-->
    <!--    </l-alert>-->
    <l-alert theme="warning" closable showIcon icon="icon-bianji1" @close="handledTabsClick">
      <template v-slot:title>可以完整的使用上述的computed等强大的Vue3能力。
        <l-button icon="iconfont icon-bianji1" theme="success" circle></l-button>
      </template>
      <template v-slot:rearContent>
        <l-button theme="success">确定</l-button>
      </template>
    </l-alert>
    <l-alert closable title="可以完整的使用上述的computed等强大的Vue3能力" rear-content="知道了"></l-alert>
    <!--    <l-alert theme="subordination" closable showIcon icon="icon-bianji1" @close="handledTabsClick">-->
    <!--      <template v-slot:title>可以完整的使用上述的computed等强大的Vue3能力。</template>-->
    <!--    </l-alert>-->
    <!--    <l-alert theme="primary" closable showIcon icon="icon-bianji1"-->
    <!--             content-text="可以完整的使用上述的computed等强大的Vue3能力" @close="handledTabsClick">-->
    <!--      <template v-slot:title>可以完整的使用上述的computed等强大的Vue3能力。-->
    <!--        <l-button theme="subordination" size="mini">确定</l-button>-->
    <!--      </template>-->

    <!--      <template v-slot:rearContent>-->
    <!--        <l-button theme="success">确定</l-button>-->
    <!--      </template>-->
    <!--    </l-alert>-->
    <!--    <l-alert title="可以完整的使用上述的computed等强大的Vue3能力"-->
    <!--             content-text="可以完整的使用上述的computed等强大的Vue3能力,可以完整的使用上述的computed等强大的Vue3能力,可以完整的使用上述的computed等强大的Vue3能力,可以完整的使用上述的computed等强大的Vue3能力"-->
    <!--             rear-content="知道了" theme="success" closable showIcon icon="icon-bianji1"-->
    <!--             @close="handledTabsClick">-->
    <!--    </l-alert>-->
  </div>
</template>
<script>
import {ref, onMounted} from 'vue'

export default {
  name: 'App',
  setup() {
    const radio1 = ref('1');
    let activeName = ref('2');
    let dialog = ref(false);
    let box = ref(null)
    const handledTabsClick = (val, name) => {
      console.log(val, name);
    }
    onMounted(() => {
      console.log(box.value)
    })
    const handledClick = (e) => {
      console.log(e);
      dialog.value = !dialog.value
    }

    function handledRefClick() {
      box.value.innerText = '12';
      box.value.onclick = (e) => {
        console.log(e);
      }
      console.log(box.value.innerText);

    }

    return {
      radio1,
      activeName,
      dialog,
      handledTabsClick,
      handledClick,
      box,
      handledRefClick
    }
  }
}
</script>
