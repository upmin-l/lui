import lSwitch from './packages/switch'
import lButton from "./packages/button";
import lRadio from "./packages/radio"
import {default as lTabs} from "./packages/tabs"
import lDialog from "./packages/dialog";

const components = [
    lSwitch,
    lButton,
    lRadio,
    lTabs,
    lDialog
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
    lDialog
}
export default {
    install
}
