 /* Automatically generated by './build/bin/build-entry.js' */
import Button from '../src/packages/button/index.js';
import Dialog from '../src/packages/dialog/index.js';
import Tabs from '../src/packages/tabs/index.js';
import TabItem from '../src/packages/tabItem/index.js';
import Switch from '../src/packages/switch/index.js';
import Radio from '../src/packages/radio/index.js';
import Alert from '../src/packages/alert/index.js';
import Option from '../src/packages/option/index.js';
import Select from '../src/packages/select/index.js';
import Loading from '../src/packages/loading/index.js';
import Input from '../src/packages/input/index.js';
import ContextMenu from '../src/packages/contextMenu/index.js';
const components = [
    Button,
Dialog,
Tabs,
TabItem,
Switch,
Radio,
Alert,
Option,
Select,
Loading,
Input,
ContextMenu
]
const install = function (Vue) {
    components.map(v => {
        Vue.component(v.name,v)
    })
    Vue.component(ContextMenu.contextSubMenu.name,ContextMenu.contextSubMenu)
    Vue.component(ContextMenu.contextMenu.name,ContextMenu.contextMenu)
    Vue.use(ContextMenu.contextMenu_directive)
}
const lUi = {
  install
}
export{
  Button,
Dialog,
Tabs,
TabItem,
Switch,
Radio,
Alert,
Option,
Select,
Loading,
Input,
ContextMenu
}
export default lUi
