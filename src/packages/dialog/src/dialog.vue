<template>
  <transition>
    <div class="l-dialog-box" :style="{backgroundColor:modal?'rgba(0, 0, 0, .6)':''}">
      <div class="l-dialog-main" :style="computedMainSize">
        <header v-if="showHeader" class="l-dialog-header">
          <span><slot name="header">{{ title || 'Dialog' }}</slot></span>
          <span class="l-dialog-close iconfont icon-d"></span>
        </header>
        <main class="l-dialog-body">
          <slot></slot>
        </main>
        <footer class="l-dialog-footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import {defineComponent, computed} from "vue"

export default defineComponent(
    {
      name: "lDialog",
      props: {
        width: [String, Number],
        top: [String, Number],
        modal: {
          type: Boolean,
          default: true
        },
        title: String,
        showFooter: Boolean,
        showHeader: {
          type: Boolean,
          default: true
        },
        headerIcon: [String, Array]
      },
      setup(props, context) {
        const computedMainSize = computed(() => {
          const style = {};
          style.width = props.width || 30 + '%';
          style.marginTop = props.top || 15 + "vh";
          return style
        })
        // const computedHeaderIcon = computed()
        //todo  支持自定义header icon
        if (Array.isArray(props.headerIcon)) {

        }
        return {
          computedMainSize
        }
      }
    },
)
</script>
<style>
.l-dialog-box {
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
}

.l-dialog-main {
  position: relative;
  margin: 0 auto 50px;
  background: #fff;
  border-radius: 2px;
  /*box-shadow: 0 1px 3px rgba(0, 0, 0, .3);*/
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12)

}

.l-dialog-footer {
  padding: 10px 15px 10px;
  text-align: right;
}

.l-dialog-header {
  position: relative;
  font-size: 16px;
  color: #333;
  padding: 10px 15px 10px;
}

/*.l-dialog-header:before{*/
/*  position: absolute;*/
/*  bottom: 0;*/
/*  content: '';*/
/*  height: 1px;*/
/*  width: 90%;*/
/*  background-color: rgba(197, 197, 197, 0.3);*/
/*}*/
.l-dialog-body {
  padding: 16px;
}

.l-dialog-close {
  font-size: 12px;
  color: #7f8280;
  text-align: right;
}
</style>
