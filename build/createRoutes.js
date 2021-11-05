const fs = require('fs')
const path = require('path')
const renderString = require('json-templater/string');

const MAIN_TEMPLATE = `
export const zhComponentRoutes = [
    {{componentsPath}}
];
export const routes = [
    {
        path: '/',
        redirect: 'home'
    },
    {
        name: 'home',
        path: '/home',
        component: () => import('../views/site/home.vue'),
        children:zhComponentRoutes
    }
]
`
const ROUTE_PATH = `
{
path: '{{path}}',
component: () => import('{{component}}')
}`

const DEBUG_TEMPLATE = `
export const routes = [
    {
        path: '/',
        redirect: 'debug'
    },
    {
        name: 'debug',
        path: '/debug',
        component: () => import('../views/debug/debugComponent.vue')
    }
]`


class CreateRoutes {
    constructor() {
        this.routes = [];
        this.init()
    }

    init() {
        switch (process.env.NODE_ENV) {
            case "development":
                console.log(process.env.NODE_ENV);
                this.processStart()
                break;
            case "bug":
                console.log(process.env.NODE_ENV);
                this.processStart(false)
                break;
        }
    }

    processStart(is_dev = true) {
        const routePath = path.resolve(__dirname, '../examples/routes/route.js')
        let template = null
        if (is_dev) {
            const componentPath = path.resolve(__dirname, '../src/packages/');
            let componentsPath = []
            fs.readdirSync(componentPath).forEach((item) => {
                const url = path.resolve(componentPath, item);
                const state = fs.statSync(url);
                if (state.isDirectory()) {
                    componentsPath.push(renderString(ROUTE_PATH, {
                        path: item,
                        component: `../demo/${ item }/index.entry.md`
                    }))
                }
            })
            template = renderString(MAIN_TEMPLATE, {
                componentsPath: componentsPath.join(',')
            })
        } else {
            template = DEBUG_TEMPLATE
        }
        fs.writeFile(routePath, template, (err) => {
            if (err) {
                console.log(err)
                return
            }
            console.log('ok')
        })
    }
}

new CreateRoutes()
