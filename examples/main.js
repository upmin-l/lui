import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import m from '../src'
const Vue = createApp(App);
Vue.use(m);
Vue.mount("#app");

