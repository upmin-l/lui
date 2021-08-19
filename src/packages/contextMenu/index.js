import lContextMenu from "./src/contextMenu.vue";
import lContextMenuSubMenu from "./src/contextMenuItem.vue";
import lContextMenu_directive from "./src/directives/contextMenu_directive";
import lContextSubMenu from "./src/contextSubMenu.vue";
export default {
    install(Vue) {
        Vue.use(lContextMenu_directive);
        Vue.component(lContextMenu.name, lContextMenu)
        Vue.component(lContextSubMenu.name, lContextSubMenu)
        Vue.component(lContextMenuSubMenu.name, lContextMenuSubMenu)
        Vue.config.globalProperties.$contextMenu = lContextMenu_directive
    },
    lContextMenu,
    lContextMenuSubMenu,
    lContextMenu_directive
}
