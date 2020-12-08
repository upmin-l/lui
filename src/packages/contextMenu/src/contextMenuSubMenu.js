import {h, ref, provide, computed, toRefs, getCurrentInstance} from 'vue'


export default {
    name: 'lContextMenuSubMenu',
    props: {
        is: {
            type: Object,
            default: {}
        },
    },
    setup(props, ctx) {
        const {is} = toRefs(props);
        let _ulNode = ref('li');
        if (Array.isArray(is.value.children) && is.value.children.length > 0) {
            _ulNode.value = 'ul';
        } else {
            _ulNode.value = null
        }
        return {
            _ulNode,
        }

    },
    render() {
        function fn(nodes) {
            if (nodes.length > 0) {
                return h(
                    'ul',
                    {},
                    nodes.map((v) => {
                        return h(
                            'li',
                            {},
                            [
                                h(
                                    'span',
                                    {class: 'l-span'},
                                    [v.name]
                                )
                            ].concat(
                                v.hasOwnProperty('children')?.length > 0 ? fn(v.children) : []
                            ))
                    })
                )
            }
        }
        return this.is.length > 0 ? fn(this.is) : null
    }
    // console.log(this.$slots.default());
    // return h(
    //     'li',
    //     {
    //         class: 'l-contextMenu-item'
    //     },
    //     [
    //         h('span', this.is.name),
    //         h(this._ulNode,),
    //     ]
    // )
// }
}
