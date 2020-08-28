import lSwitch from './packages/switch/index'
import lButton from "./packages/button/index";

const components = [
    lSwitch,
    lButton
];

const rootComponents = {
    version: '0.0.1',
    install: Vue => {
        components.forEach(item => {
            Vue.component(item.name, item)
        });

    }
};
export {
    lSwitch,
    lButton
}
export default rootComponents
