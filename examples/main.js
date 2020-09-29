import {createApp} from 'vue'
import App from './App.vue'
// import router from "./router";
import './index.css'
// import './assets/css/index.scss'
import '../bag/styles/index.css'
import m from '../src/index'

const Vue = createApp(App);
// Vue.use(router);
Vue.use(m);
Vue.mount("#app");


