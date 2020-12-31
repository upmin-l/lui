<template>
  <div>
    <l-button theme="success" @click="handledClick">确定</l-button>
    <l-button theme="primary" @click="handledRefClick">确定</l-button>
    <l-button theme="subordination" @click="add">确定</l-button>
    <l-button size="mini" theme="error">确定按鈕</l-button>
    <l-button theme="warning">确定</l-button>
    <l-switch @change="handledContextClick" v-model:value="dialog"></l-switch>
    <br>
<!--    <div style="display:inline-block;width: 500px;height: 500px;border: 1px solid"-->
<!--         v-context-menu="menuData"></div>-->
    <div  style="display:inline-block;width: 500px;height: 500px;background-color: #f60">
<!--      <l-context-menu :data="menuData.data" @item-click="handledContextClick">-->

<!--      </l-context-menu>-->
    </div>
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
        <l-loading theme="circle" content-text="正在加载"></l-loading>

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
    <l-alert theme="error" closable showIcon icon="icon-bianji1" rear-content="知道了"
             @close="handledTabsClick">
      <template v-slot:title>可以完整的使用上述的computed等强大的Vue3能力。
        <l-button theme="error" size="mini">确定</l-button>
      </template>
    </l-alert>
    <l-alert theme="warning" closable showIcon icon="icon-bianji1" @close="handledTabsClick">
      <template v-slot:title>可以完整的使用上述的computed等强大的Vue3能力。
        <l-button icon="iconfont icon-bianji1" theme="success" circle></l-button>
      </template>
      <template v-slot:rearContent>
        <l-button theme="success">确定</l-button>
      </template>
    </l-alert>
    <l-alert closable title="可以完整的使用上述的computed等强大的Vue3能力" rear-content="知道了"></l-alert>
    <l-alert theme="subordination" closable showIcon icon="icon-bianji1" @close="handledTabsClick">
      <template v-slot:title>可以完整的使用上述的computed等强大的Vue3能力。</template>
    </l-alert>
    <l-alert theme="primary" closable showIcon icon="icon-bianji1"
             content-text="可以完整的使用上述的computed等强大的Vue3能力" @close="handledTabsClick">
      <template v-slot:title>可以完整的使用上述的computed等强大的Vue3能力。
        <l-button theme="subordination" size="mini">确定</l-button>
      </template>

      <template v-slot:rearContent>
        <l-button theme="success">确定</l-button>
      </template>
    </l-alert>
    <l-alert title="可以完整的使用上述的computed等强大的Vue3能力"
             content-text="可以完整的使用上述的computed等强大的Vue3能力,可以完整的使用上述的computed等强大的Vue3能力,可以完整的使用上述的computed等强大的Vue3能力,可以完整的使用上述的computed等强大的Vue3能力"
             rear-content="知道了" theme="success" closable showIcon icon="icon-bianji1"
             @close="handledTabsClick">
    </l-alert>
    <l-select width="300">
      <l-option v-for="(item,index) of option" :img-url="item.icon" :key="index">{{ item.job }}</l-option>
      <l-option icon="iconfont icon-bianji1">
        <!--        <img  src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"  alt="">-->
        123
      </l-option>
      <l-option img-url="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar">4444</l-option>
      <l-option img-url="../public/favicon.ico">4444</l-option>
    </l-select>
    <div v-show="show">奇怪奇怪骑过去</div>
    <l-input></l-input>
  </div>
<!--  <l-loading></l-loading>-->
</template>
<script>
import {ref, onMounted, getCurrentInstance} from 'vue'

export default {
  name: 'App',
  setup(props, ctx) {
    const internalInstance = getCurrentInstance()

    const {$contextMenu} = internalInstance.appContext.config.globalProperties;

    const radio1 = ref('1');
    let activeName = ref('2');
    let dialog = ref(false);
    let box = ref(null)
    const handledTabsClick = (val, name) => {
      console.log(val, name);
    }
    onMounted(() => {
      // console.log(box.value)
    })
    const handledClick = (e) => {
      dialog.value = !dialog.value
    }

    function handledRefClick() {
      box.value.innerText = '12';
      box.value.onclick = (e) => {
        console.log(e);
      }
    }

    let option = [
      {
        id: 1,
        age: 15,
        job: '前端'
      },
      {
        id: 2,
        age: 17,
        icon: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
        job: '设计撒打算打算打算打算热热热若翁认为热无若翁'
      },
    ]
    let show = ref(false)

    function add() {
      show.value = !show.value
    }

    let menuData = {
      data: [
        {
          name: '前端',
          id: '12',
          icon: '',
          children: [
            {
              name: '你好',
              id: '55',
              children: [
                {
                  name: '翻译下',
                  id: '66'
                },
                {
                  name: '不翻译',
                  id: '66'
                }
              ]
            }
          ]
        },
        {
          name: 'javascript',
          id: '2',
          icon: '',
          children: [
            {
              name: 'vue3 集合',
              id: '33'
            }
          ]
        },
        {
          name: 'scss',
          id: '2'
        },
        {
          name: '查看网页源代码(N)',
          id: '4'
        }
      ]
    }

    function handledContextClick(e, val) {
      console.log(e);
      console.log(val);
    }

    const itemClick2 = (e, data) => {
      console.log(e);
      console.log(data);
    }
    return {
      radio1,
      activeName,
      dialog,
      handledTabsClick,
      handledClick,
      box,
      handledRefClick,
      option,
      add,
      show,
      menuData,
      handledContextClick,
      itemClick2
    }
  }
}
</script>
