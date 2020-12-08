import contextMenu from "./src/contextMenu.vue";
import contextMenuSubMenu from "./src/contextMenuSubMenu.vue";
import contextMenu_directive from "./src/directives/contextMenu_directive";
contextMenu.install = function (Vue){
    Vue.use(contextMenu_directive);
    Vue.component(contextMenu.name,contextMenu)
    Vue.component(contextMenuSubMenu.name,contextMenuSubMenu)
}
export default contextMenu
