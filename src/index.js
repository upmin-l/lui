import Switch from './packages/switch/index'
import button from "./packages/button/index";
const components = [
    Switch,
    button
];
const rootComponents = {
    version: '0.00.1',
    install: Vue => {
        components.forEach(item => {
            Vue.component(`l-${item.name}`, item)
        });

    }
};
export default rootComponents
