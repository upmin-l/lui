import lDialog from "./src/dialog.vue";

lDialog.install = function (Vue) {
    Vue.component(lDialog.name, lDialog)
}
export default lDialog
