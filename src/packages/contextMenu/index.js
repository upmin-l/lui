import contextMenu from "./src/contextMenu.vue";
import contextMenuSubMenu from "./src/contextMenuItem.vue";
import contextMenu_directive from "./src/directives/contextMenu_directive";
import contextSubMenu from "./src/contextSubMenu.vue";
export default {
    install(Vue) {
        Vue.use(contextMenu_directive);
        Vue.component(contextMenu.name, contextMenu)
        Vue.component(contextSubMenu.name, contextSubMenu)
        Vue.component(contextMenuSubMenu.name, contextMenuSubMenu)
        Vue.config.globalProperties.$contextMenu = contextMenu_directive
    },
    contextMenu,
    contextSubMenu,
    contextMenu_directive
}
