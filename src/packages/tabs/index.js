import lTabs from "./src/tabs.vue"
import lTabsItem from "./src/tabItem.vue"

lTabs.install = function (Vue) {
    Vue.component(lTabs.name, lTabs);
    Vue.component(lTabsItem.name, lTabsItem)
}
export default lTabs
export {lTabsItem}
