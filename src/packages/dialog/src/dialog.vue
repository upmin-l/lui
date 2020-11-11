<template>
  <transition name="dialog-fade">
    <div v-show="visible" @click.self="close" class="l-dialog-box"
         :style="{backgroundColor:modal?'rgba(0, 0, 0, .6)':''}">
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

<script lang="ts">
import {defineComponent, computed, toRefs} from "vue"

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
        headerIcon: [String, Array],
        visible: Boolean,
        clickModalClose: {
          type: Boolean,
          default: true
        }
      },
      setup(props, context) {
        const {clickModalClose} = toRefs(props);

        interface is_style {
          width: string | number;
          marginTop: string | number
        }

        const computedMainSize = computed(() => {
          let style = <is_style>{};
          style.width = props.width as string || 30 + '%';
          style.marginTop = props.top || 15 + "vh";
          return style
        })
        const close = () => {
          if (clickModalClose.value) context.emit('update:visible', false)
        }
        // const computedHeaderIcon = computed()
        //todo  支持自定义header icon
        if (Array.isArray(props.headerIcon)) {

        }
        return {
          computedMainSize,
          close,
          clickModalClose
        }
      }
    },
)
</script>
