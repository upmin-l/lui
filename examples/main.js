import {createApp} from 'vue'
import App from './App.vue'
// import router from "./router";
import './index.css'
// import './assets/css/index.scss'
import '../bag/styles/index.css'


const Vue = createApp(App);
import m from '../src/index'
Vue.use(m);
// Vue.use(router);
Vue.mount("#app");


