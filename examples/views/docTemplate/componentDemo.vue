<template>
  <div class="example-card">
    <a href="#" class="is_title">
      <slot name="title"></slot>
    </a>

    <div class="is_content">
      <slot name="content"/>
    </div>
    <div class="is_demo" :style="{height:`${realHeight}px`}">
      <l-row>
        <l-col class="example-demo-box" :span="12">
          <div class="example-content-demo">
            <slot name="demo"/>
          </div>
          <div class="example-component-desc">
            <slot name="des"/>
          </div>
        </l-col>
        <l-col style="position: relative;" :span="12">
          <div class="example-code-box">
            <div ref="exampleCode" class="example-content-code">
              <pre class="html"><code>{{ sfcCode }}</code> </pre>
            </div>
          </div>
          <div  v-if="height>300" @click="showUnfold" class="example-content-unfold">
            <i :class="['iconfont',sign?'icon-xiala':'icon-xiangshangshousuo1']"></i>
          </div>
        </l-col>
      </l-row>
      <div class="example-content-handle">
        <span class="iconfont icon-icon_expandlistcopy"></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>

</template>

<script>
import {getCurrentInstance, onMounted, ref} from 'vue'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
import 'highlight.js/styles/color-brewer.css'

export default {
  name: "componentDemo",
  props: {
    title: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    },
    demoFileName: {
      type: String,
      required: true
    },
    relativeUrl: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const sfcCode = decodeURIComponent(props.code)
    const realHeight = ref()
    const exampleCode = ref()
    const height = ref()
    const {proxy} = getCurrentInstance();
    const sign = ref(true)
    const showUnfold = () => {
      if (!sign.value){
        realHeight.value =300;
        sign.value = true
        return
      }
      if (proxy.$refs.exampleCode.offsetHeight > 300) {
        realHeight.value = proxy.$refs.exampleCode.clientHeight;
        sign.value =false
      }
    }
    onMounted(() => {
      hljs.registerLanguage('javascript', javascript);
      hljs.registerLanguage('html', xml)
      hljs.registerLanguage('css', css)
      hljs.initHighlighting();
      height.value =proxy.$refs.exampleCode.clientHeight
    })
    return {
      sfcCode,
      sign,
      height,
      showUnfold,
      realHeight,
      exampleCode
    }
  }
}
</script>
<style>
.hljs {
  display: block;
  line-height: 1.8;
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
  font-size: 12px;
  padding: 18px 24px;
  background-color: #fafafa;
  border: 1px solid #eaeefb;
  margin-bottom: 25px;
  border-radius: 4px;
}
</style>
