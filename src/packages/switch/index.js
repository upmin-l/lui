import lSwitch from './src/switch.vue'

// interface Vue {
//     component: (name: string, obj: any) => any
// }

lSwitch.install = function (Vue) {
    Vue.component('l-' + lSwitch.name, lSwitch)
};
export default lSwitch
