<template>
  <div class="l-loading">
    <div class="l-loading-icon">
      <slot>
        <div v-if="showIcon" class="l-loading__spin">
          <div v-if="theme==='circle'" class="l-loading__circle"></div>
          <div v-else>
            <div class="l-loading-outer"></div>
            <div class="l-loading-inner l-loading-inner-dot"></div>
          </div>
        </div>
      </slot>
      <div v-if="contentText" class="l-loading-text">{{ contentText }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lLoading",
  props: {
    contentText: String,
    theme: {
      type: String,
      default: 'default'
    },
    visible:{
      type:Boolean,
      default:false
    },
    showIcon:{
      type:Boolean,
      default:true
    }
  }
}
</script>


