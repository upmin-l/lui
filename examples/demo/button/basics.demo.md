### 基础用法


<p>基础组件，触发业务逻辑时使用。</p>
   <l-alert title="可以完整的使用上述的computed等强大的Vue3能力"
          content-text="可以完整的使用上述的computed等强大的Vue3能力,可以完整的使用上述的computed等强大的Vue3能力,可以完整的使用上述的computed等强大的Vue3能力,可以完整的使用上述的computed等强大的Vue3能力"
          rear-content="知道了" theme="success" closable  icon="icon-bianji1">
  </l-alert>

```html
<l-button theme="success" @click="handledClick">确定</l-button>
<l-button theme="primary" @click="handledClick">确定</l-button>
<l-button theme="subordination" >确定</l-button>
<l-button size="mini" theme="error">确定按鈕</l-button>
<l-button theme="warning">确定</l-button>
<l-button size="mini" theme="success" class="iconfont icon-fuzhi" :circle="true"></l-button>
<l-button theme="subordination" class="iconfont icon-fuzhi" :circle="true"></l-button>
<l-button theme="primary" class="iconfont icon-fuzhi" :circle="true"></l-button>
```
```js
const handledClick = (e)=>{
    console.log(e)
} 


```
