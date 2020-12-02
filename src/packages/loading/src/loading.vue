<template>
  <div class="l-loading">
    <div class="l-loading-icon">
      <slot>
        <div class="l-loading__spin">
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
    }
  }
}
</script>

<style>
.l-loading__spin {
  display: inline-block;
  width: 40px;
  height: 40px;
  text-align: center;
  animation: rotate 2.0s infinite linear;
}

.l-loading-text {
  color: #009af3;
}

.l-loading-outer, .l-loading-inner {
  width: 50%;
  height: 50%;
  position: absolute;

  background-color: rgba(0, 154, 243, .2);
  border-radius: 100%;
  animation: bounce 2.0s infinite ease-in-out;
}

.l-loading-inner-dot {
  top: auto;
  bottom: 0;
  background-color: rgba(63, 81, 181, .2);
  animation-delay: -1.0s;
}


</style>
