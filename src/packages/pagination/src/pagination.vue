<template>
  <div class="l-pagination">
    <ul :class="['l-page-container',{'is_background':background}]">
      <template v-for="(item, index) in componentsList" :key="`l-${index}`">
        <component :is="item.component" :disabled="disabled" v-bind="item.bind" @[item.event]="item.eventName"></component>
      </template>
    </ul>
  </div>
</template>


<script setup >
import {usePagination} from "./pagination.js";

defineOptions({
  name:'lPagination'
})
const props = defineProps({
  total: { type: [Number, String], default: 0 }, // 总数 The total number of
  pageNum: { type: [Number, String], default: 1 }, // 当前页数 The current number of pages
  pageSize: { type: [Number, String], default: () => 10 }, // 每页显示条数 Size of entries per page
  sizesList: { type: Array, default: () => [10, 20, 50, 100] }, // 每页显示条数的选项设置 Option setting to display number of entries per page
  pagerCount: { type: [Number, String], default: 7 }, // 最大页码数，须为大于等于 5 且小于等于 21 的奇数 The maximum number of pages must be an odd number greater than or equal to 5 and less than or equal to 21
  disabled: { type: Boolean, default: false }, // 是否禁用 Disabled or not
  layout: { type: String, default: "total,prev,pager,next" }, // 自定义组件布局 Customize component layout. option:totalPages,total,prev,pager,next,jumper,sizes
  prevText: { type: String, default: "" }, // 替代图标显示的上一页文案 Replace the icon displayed on the previous page
  nextText: { type: String, default: "" }, // 替代图标显示的下一页文案 Replace the icon displayed on the next page
  totalTmpString: { type: String, default: "共 {total} 条" }, // 替代总数文案模板 Replace the total copywriting templates
  pagesTmpString: { type: String, default: "共 {totalPages} 页" }, // 替代总页数文案模板 Replace the total page copywriting template
  jumperTmpString: { type: String, default: "跳至{jumper}页" }, // 替代输入跳转文案模板 Replace the jumper copywriting template
  sizesTmpString: { type: String, default: "{value}条/页" }, // 替代每页显示条数选项文案模板 Replace the sizes option copywriting template
  background: { type: Boolean, default: false }, // 是否添加背景色 Background or not
  simple: { type: Boolean, default: false }, // 是否渲染成简洁分页 Simple or not
  hideOnSinglePage: { type: Boolean, default: false }, // 只有一页时隐藏 Only one page hidden or not
});
const emit = defineEmits(["page-change", "size-change"]);
const { componentsList } = usePagination(props, emit);

</script>

<style lang="scss">
.l-pagination{
  display: flex;
  position: relative;
  .l-page-container{
    display: flex;
    height: 30px;
    min-height: 30px;
    font-size: 12px;
    .l-pageItem-active{
      background-color: #449efb;
      border: 1px solid #449efb;
    }
    .l-pageItem-disabled {
      cursor: no-drop;
      pointer-events: none;
      opacity: .5;
    }
  }
  .l-page-item{
    height: 30px;
    min-height: 30px;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    list-style: none;
    float: left;
    min-width: 30px;
    box-sizing: border-box;
    text-align: center;
    margin: 0 4px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    .l-page-text{
      padding: 0 8px;
    }
    .l-page-icon{
      font-size: 16px;
    }
  }
}
.is_background{
  .l-pageItem-active{
    .l-page-text, .l-page-icon{
      color: #fff;
      font-weight: bold;
    }
  }
}
</style>
