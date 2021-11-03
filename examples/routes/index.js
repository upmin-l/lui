import { createRouter, createWebHistory } from 'vue-router'

export default function (app, routes = []) {
    console.log(routes);
    const router = createRouter({
        history: createWebHistory(),
        routes
    })
    router.beforeEach((to, from, next) => {
        next()
    })
    router.afterEach((to, from, next) => {

    })
    return router
}
