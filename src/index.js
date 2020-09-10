import lSwitch from './packages/switch'
import lButton from "./packages/button";
import lRadio from "./packages/radio"

const components = [
    lSwitch,
    lButton,
    lRadio
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
    lButton,
    lRadio
}
export default rootComponents
