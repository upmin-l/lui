import { h, render } from 'vue'

const MOUNT_COMPONENT_REF = 'l_component'
const COMPONENT_CONTAINER_SYMBOL = Symbol('l_component_container')

/**
 * 创建组件实例对象
 * 返回的实例和调用 getCurrentComponent() 返回的一致
 * @param {*} Component
 * @param props
 * @param children
 */
export function createComponent(Component, props, children) {
    const v_node = h(Component, { ...props, ref: MOUNT_COMPONENT_REF }, children)
    const container = document.createElement('div')
    v_node[COMPONENT_CONTAINER_SYMBOL] = container
    render(v_node, container)
    return v_node.component
}

/**
 * 销毁组件实例对象
 * @param {*} ComponnetInstance 通过createComponent方法得到的组件实例对象
 */
export function unmountComponent(ComponnetInstance) {
    render(undefined, ComponnetInstance.vnode[COMPONENT_CONTAINER_SYMBOL])
}
