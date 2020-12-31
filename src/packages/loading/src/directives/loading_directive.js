import loading from "../loading.vue";
import {createComponent} from "../../../../utils/component";
const loadingObj ={
    mounted(el,binging) {
        const _node = createComponent(loading, {...binging.value});
        console.log({...binging.value});
        el.appendChild(_node.ctx.$el);
    },
    updated(el){
        console.log(el,'updated');
    }
}
export default {
    install(Vue) {
        Vue.directive('loading', loadingObj)
    },
}
