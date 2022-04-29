## 基础用法

<p>分隔内容上有关联但属于不同类别的数据集合。</p>

```html

<l-tabs :navBarColor="['#FEB692','#EA5455']" v-model:value="activeName" @tabsClick="handledTabsClick">
    <l-tab-item label="一剑轮回一掌缘" name="1">
        标签1
    </l-tab-item>
    <l-tab-item label="标签2" name="2">
        <p>
            不得不承认，computed这个强大功能的实现果然少不了内部非常复杂的实现，这个双向依赖收集的套路相信也会给各位小伙伴带来很大的启发。跟着尤大学习，果然有肉吃！
            另外由于@vue/reactivity的框架无关性，我把它整合进了React，做了一个状态管理库，可以完整的使用上述的computed等强大的Vue3能力。
        </p>
    </l-tab-item>
    <l-tab-item label="两仪功下天下缘" name="3">
        <l-button theme="success">确定</l-button>
        <l-button theme="primary">确定</l-button>
        <l-button theme="subordination">确定</l-button>
    </l-tab-item>
</l-tabs>
```
```js
import {ref} from 'vue' 
const activeName = ref('2')
const handledTabsClick = (val)=>{
    console.log(val)
}
```
