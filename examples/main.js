import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import '../lib/styles/index.css'
import crateRoute from './routes'

import lui from '../src/index'
// import { lContextMenu } from '../src/index'
//ROUTES FILE
const Vue = createApp(App);
const router = crateRoute(Vue, [])
Vue.use(router)

Vue.use(lui);
// Vue.provide('$contextMenu', lContextMenu.contextMenu)
// Vue.use(router);
Vue.mount("#app");


