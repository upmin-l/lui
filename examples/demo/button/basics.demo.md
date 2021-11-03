### 基础用法

```html
<l-button theme="success" @click="handledClick">确定</l-button>
<l-button theme="primary" @click="handledClick">确定</l-button>
<l-button theme="subordination" >确定</l-button>
<l-button size="mini" theme="error">确定按鈕</l-button>
<l-button theme="warning">确定</l-button>
<l-button size="mini" theme="success" class="iconfont icon-fuzhi" circle="true"></l-button>
<l-button theme="subordination" class="iconfont icon-fuzhi" circle="true"></l-button>
<l-button theme="primary" class="iconfont icon-fuzhi" circle="true"></l-button>
```
```js
const handledClick = (e)=>{
    console.log(e)
} 


```
