import { createRouter, createWebHistory } from 'vue-router'

export default function (app, routes = []) {
    const router = createRouter({
        history: createWebHistory(),
        routes
    })
    router.beforeEach((to, from, next) => {

    })
    router.afterEach((to, from, next) => {

    })
    return router
}
