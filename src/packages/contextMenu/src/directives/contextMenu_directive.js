import contextMenu from "../contextMenu.vue";
import {createComponent} from '../../../../utils/component'

const contextMenuObj = {
    mounted(el, binging, v_node) {
        const {data} = binging.value;
        if (!Array.isArray(data) && !data.length > 0) {
            console.error('data必须是一个数组且长度大于0')
            return
        }
        const _node = createComponent(contextMenu, {...binging.value});
        let offX;
        let offY;
        _node.ctx.$el.style.minWidth = '120px';
        _node.ctx.$el.style.display = 'none';
        // console.log(_node);
        // console.log({..._node.ctx.$slots});
        el.appendChild(_node.ctx.$el);
        el.addEventListener('contextmenu', function (el) {
            offX = el.pageX;
            offY = el.pageY;
            el.preventDefault();
            _node.ctx.$el.style.display = 'block';
            _node.ctx.$el.style.left = offX + 'px'
            _node.ctx.$el.style.top = offY + 'px'
            _node.ctx.$el.style.opacity = 1
        });
        el.addEventListener('click', function (e) {
            e.preventDefault();

            _node.ctx.$el.style.display = 'none';
        })

    },
    updated(el) {
        console.log(el, 'updated');
    }
}

export default {
    install(Vue) {
        Vue.directive('contextMenu', contextMenuObj)
    }
}
