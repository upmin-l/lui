import lAlert from "./src/lAlert.vue";
lAlert.install = function (Vue){
    Vue.component(lAlert.name,lAlert)
}
export default lAlert
