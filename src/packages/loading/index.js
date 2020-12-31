import loading from "./src/loading.vue";
import loading_directive from "./src/directives/loading_directive";

export default {
    install(Vue) {
        Vue.use(loading_directive)
        Vue.component(loading.name, loading)
    },
    loading_directive,
    loading
}
