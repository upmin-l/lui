<template>
  <div class="l-tabs" :style="{width:width,minHeight:height}">
    <div class="l-tabs-nav-bar" :style="{background:`linear-gradient(30deg, ${navBarColor})`}"  ref="indicator"></div>
    <div class="l-tabs-nav" ref="navBox">
      <div class="l-tabs-nav-item"
           @click="handledTabsClick($event,item)"
           :class="{'is-tabs--nav-active':item.props.name===value}"
           v-for="(item,index) in defaults" :key="index"
           :ref="el=>{if (item.props.name===value)selectedItem=el}">
        {{ item.props.label }}
      </div>
    </div>
    <div class="l-tabs-content">
      <component class="l-tabs-item" :class="{'is_tabs--active':item.props.name===value}"
                 v-for="(item,index) in defaults" :key="index" :is="item"></component>
    </div>
  </div>
</template>

<script lang="ts">


import {defineComponent, onMounted, ref, watchEffect} from "vue"

export default defineComponent(
    {
      name: "lTabs",
      props: {
        data: {
          type: Array,
          default: []
        },
        value: [String, Number],
        theme: {
          type: String,
          default: ''
        },
        position:{
          type:String,
          default:'top'
        },
        width: {
          type: String,
          default: '100%'
        },
        height: {
          type: String,
          default: '200px'
        },
        navBarColor: {
          type: Array,
          default:()=>[]
        }
      },
      setup(props: any, context: any) {
        const defaults = context.slots.default();
        const selectedItem = ref();
        const indicator = ref();
        const navBox = ref();
        let sign = 0
        let newLabel = null;
        let newName = null;
        if (Array.isArray(props.data) && props.data.length >= 0) {

        } else {
          throw new Error('the "data" must be an array of length greater than 1')
        }
        defaults.map((v:any) => {
          console.log(v.type);
          if (v.type !== 'l-tab-item') {
            throw new Error('parse component failed, "tabs" component expect "<l-tab-item>"')
          }
          //todo 需要判断不传入参数的情况
          /*      if (!v.props && (v.props.label || v.props.name)) {
                  v.props.label = v.props.label ? newLabel = v.props.label : newLabel + sign++;
                  v.props.name = v.props.name ? newName = v.props.name : newName + sign++;
                }*/
        })

        onMounted(() => {
          watchEffect(() => {
            const {width, left: divScreenItemLeft} = selectedItem.value.getBoundingClientRect();
            const {left: navBoxLeft,height} = navBox.value.getBoundingClientRect();
            console.log(props.position);

            indicator.value.style.width = width + 'px'
            indicator.value.style.left = divScreenItemLeft - navBoxLeft + 'px'
          })
        })

        /**
         * @param  e:事件
         * @param val 选项卡值
         * @date 2020年10月19日15:49:45
         ***/
        const handledTabsClick = (e: Event, val: any) => {
          context.emit('update:value', val.props.name)

          context.emit("tabsClick", e, val.props.name)
        }

        return {
          defaults,
          handledTabsClick,
          indicator,
          navBox,
          selectedItem
        }
      }
    }
)
</script>

