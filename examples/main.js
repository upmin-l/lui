import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import '../lib/styles/index.css'
import crateRoute from './routes'

import lui from '../src/index'
// import { lContextMenu } from '../src/index'
//ROUTES FILE
import { routes } from "./routes/route";
import ComponentDemos from "./views/docTemplate/ComponentDemos.vue";
import componentTemplate from "./views/docTemplate/componentTemplate.vue";
import ComponentDemo from "./views/docTemplate/ComponentDemo.vue";
const Vue = createApp(App);
const router = crateRoute(Vue, routes)
Vue.use(router)

Vue.component('componentTemplate',componentTemplate)
Vue.component('ComponentDemo',ComponentDemo)
Vue.component('ComponentDemos', ComponentDemos)

Vue.use(lui);
// Vue.provide('$contextMenu', lContextMenu.contextMenu)
// Vue.use(router);
Vue.mount("#app");


