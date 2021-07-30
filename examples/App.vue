<template>
  <root-header></root-header>
  <router-view></router-view>
  <!--  <div>-->
<!--    <l-button theme="success" @click="handledClick">确定</l-button>-->
<!--    <l-button theme="primary" @click="handledRefClick">确定</l-button>-->
<!--    <l-button theme="subordination" @click="add">确定</l-button>-->
<!--    <l-button size="mini" theme="error">确定按鈕</l-button>-->
<!--    <l-button theme="warning">确定</l-button>-->
<!--    <br>-->
<!--    <l-button gradient="success">确定</l-button>-->
<!--    <l-button gradient="primary">确定</l-button>-->
<!--    <l-button gradient="subordination">确定</l-button>-->
<!--    <l-button gradient="warning">确定</l-button>-->
<!--    <l-switch @change="handledContextClick" v-model:value="dialog"></l-switch>-->
<!--    <br>-->
<!--    <div style="display:inline-block;width: 500px;height: 500px;border: 1px solid"-->
<!--         v-context-menu="menuData" @item-click="handledContextClick"></div>-->
<!--&lt;!&ndash;    background-image: linear-gradient( 135deg, #FEB692 10%, #EA5455 100%);&ndash;&gt;-->
<!--    <div  style="display:inline-block;width: 500px;height: 500px;background-color: #f60">-->
<!--      <l-context-menu :data="menuData.data" @item-click="handledContextClick"></l-context-menu>-->
<!--    </div>-->
<!--    <l-radio v-model:value="radio1" label="1">确定</l-radio>-->
<!--    <l-radio v-model:value="radio1" label="2">确定</l-radio>-->
<!--    <l-tabs :navBarColor="['#FEB692','#EA5455']" v-model:value="activeName" @tabsClick="handledTabsClick">-->
<!--      <l-tab-item label="表情1" name="1">-->
<!--        <p> Single-origin coffee tilde craft beer organic wolf. Plaid kickstarter vegan roof party vice, try-hard-->
<!--          taxidermy truffaut small batch. PBR&B butcher helvetica, green juice craft beer kickstarter skateboard. +1-->
<!--          selvage VHS gastropub slow-carb, twee vegan helvetica farm-to-table marfa seitan letterpress narwhal squid-->
<!--          cliche. Meggings fap leggings slow-carb kickstarter, health goth gastropub hashtag blue bottle photo booth-->
<!--          literally PBR&B iPhone ugh. Organic scenester truffaut pug, pitchfork man bun artisan brooklyn photo booth.-->
<!--          Biodiesel farm-to-table 8-bit direct trade humblebrag, man braid blue bottle.</p>-->
<!--        <l-loading theme="circle" content-text="正在加载"></l-loading>-->

<!--      </l-tab-item>-->
<!--      <l-tab-item label="标签5646546542" name="2">-->
<!--        <p>-->
<!--          不得不承认，computed这个强大功能的实现果然少不了内部非常复杂的实现，这个双向依赖收集的套路相信也会给各位小伙伴带来很大的启发。跟着尤大学习，果然有肉吃！-->
<!--          另外由于@vue/reactivity的框架无关性，我把它整合进了React，做了一个状态管理库，可以完整的使用上述的computed等强大的Vue3能力。-->
<!--        </p>-->
<!--        <l-loading  ></l-loading>-->
<!--      </l-tab-item>-->
<!--      <l-tab-item label="3" name="3">-->
<!--        <l-button theme="success">确定</l-button>-->
<!--        <l-button theme="primary">确定</l-button>-->
<!--        <l-button theme="subordination">确定</l-button>-->
<!--      </l-tab-item>-->
<!--    </l-tabs>-->
<!--    <l-dialog v-model:visible="dialog" :headerIcon="['iconfont icon-d','#f60']" title="创建组件">-->
<!--      <l-button theme="success">确定</l-button>-->
<!--      <l-button theme="primary">确定</l-button>-->
<!--      <l-button theme="subordination">确定</l-button>-->
<!--      <l-button theme="error">确定</l-button>-->
<!--      <l-button theme="warning">确定</l-button>-->
<!--    </l-dialog>-->
<!--    <div ref="box">12312</div>-->
<!--    <l-alert theme="error" closable showIcon icon="icon-bianji1" rear-content="知道了"-->
<!--             @close="handledTabsClick">-->
<!--      <template v-slot:title>可以完整的使用上述的computed等强大的Vue3能力。-->
<!--        <l-button theme="error" size="mini">确定</l-button>-->
<!--      </template>-->
<!--    </l-alert>-->
<!--    <l-alert theme="warning" closable showIcon icon="icon-bianji1" @close="handledTabsClick">-->
<!--      <template v-slot:title>可以完整的使用上述的computed等强大的Vue3能力。-->
<!--        <l-button icon="iconfont icon-bianji1" theme="success" circle></l-button>-->
<!--      </template>-->
<!--      <template v-slot:rearContent>-->
<!--        <l-button theme="success">确定</l-button>-->
<!--      </template>-->
<!--    </l-alert>-->
<!--    <l-alert closable title="可以完整的使用上述的computed等强大的Vue3能力" rear-content="知道了"></l-alert>-->
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
<!--    <l-select width="300">-->
<!--      <l-option v-for="(item,index) of option" :img-url="item.icon" :key="index">{{ item.job }}</l-option>-->
<!--      <l-option icon="iconfont icon-bianji1">-->
<!--        &lt;!&ndash;        <img  src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"  alt="">&ndash;&gt;-->
<!--        123-->
<!--      </l-option>-->
<!--      <l-option img-url="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar">4444</l-option>-->
<!--      <l-option img-url="../public/favicon.ico">4444</l-option>-->
<!--    </l-select>-->
<!--    <div v-show="show">奇怪奇怪骑过去</div>-->
<!--    <l-input></l-input>-->
<!--  </div>-->
<!--  <l-loading content-text="正在加载"></l-loading>-->
</template>
<script >
import rootLeft from "./views/site/rootLeft.vue";
import rootHeader from "./views/site/rootHeader.vue";
export default {
  name:'App',
  components:{
    rootLeft,
    rootHeader
  }
}
</script>
