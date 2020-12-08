import loading from "./src/loading.vue";
import loading_directive from "./src/directives/loading_directive";
loading.install = function (Vue) {
    Vue.use(loading_directive)
    Vue.component(loading.name, loading)
};
export default loading
