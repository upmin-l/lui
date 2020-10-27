<template>
  <transition>
    <div v-if="visible" class="l-alert" :class="`l-alert__${theme}`">
      <i v-if="showIcon" class="l-alert-icon iconfont" :class="[icon,contentText?'l-alert__bin':'']"></i>
      <div class="l-alert-content">
        <span class="l-alert-title"><slot name="title">{{ title }}</slot></span>
        <p>
          <slot name="content">{{ contentText }}</slot>
        </p>
      </div>
      <span v-if="closable" class="l-alert-rear" :class="{'iconfont icon-bianji1':!rearContent}" @click="onClose"><slot
          name="rearContent">{{ rearContent }}</slot></span>
    </div>
  </transition>
</template>

<script lang="ts">
import {defineComponent, ref,onMounted} from "vue";

export default defineComponent({
  name: "lAlert",
  props: {
    title: String,
    icon: String,
    closable: Boolean,
    contentText: String,
    showIcon: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'success'
    },
    rearContent: String
  },
  emits: ['close'],
  setup(props: any, context: any) {
    //todo 当通过slot传值进来rearContent会出现undefined问题
    const visible = ref(true)
    const onClose = () => {
      visible.value = false
      context.emit('close')
    };
    return {
      onClose,
      visible
    }
  }
})
</script>
