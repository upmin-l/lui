import lSwitch from './packages/switch'
import lButton from "./packages/button";
import lRadio from "./packages/radio"
import {default as lTabs} from "./packages/tabs"
import {lTabsItem} from "./packages/tabs"
import lDialog from "./packages/dialog";
import lAlert from "./packages/alert";
import lSelect from "./packages/select"
import lOption from "./packages/option"

const components = [
    lSwitch,
    lButton,
    lRadio,
    lTabs,
    lDialog,
    lTabsItem,
    lAlert,
    lSelect,
    lOption
];

const install = function (Vue) {
    components.map(v => {
        Vue.use(v)
    })
}
export {
    lSwitch,
    lButton,
    lRadio,
    lTabs,
    lDialog,
    lTabsItem,
    lAlert,
    lSelect,
    lOption
}
export default install
