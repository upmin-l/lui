import Switch from './packages/switch/src/switch.vue'
const components = [
    Switch
];
console.log(Switch);
const install = function (Vue, opts) {
    components.forEach((item) => {
        Vue.component(`l-${item.name}`,item)
    });
    Vue.config.globalProperties.$LUI = {
        size: opts.size || "",
        zIndex: opts.zIndex || 1997
    }
};
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue, '')
}

const obj ={
    version: '0.00.1',
    install:Vue =>{
        components.forEach(item=>{
            Vue.component(`l-${item.name}`,item)
        });

    }
};
export default obj
