import loading from "./src/loading.vue";

loading.install = function (Vue) {
    Vue.component(loading.name, loading)
};
export default loading
