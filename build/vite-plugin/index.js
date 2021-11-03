
const createVuePlugin = require('@vitejs/plugin-vue')
const getMdTransform = require("./vite-md-plugin/mdTransform");
const fileRegex = /\.(md|entry)$/

const vuePlugin = createVuePlugin({
    include: [/\.vue$/, /\.md$/, /\.entry$/]
})
const vitePlugin = ()=>{
    const demoTransitionVitePlugin= {
        name:'vite-md-plugin',
        transform(code, id) {
            if (fileRegex.test(id)){
                return getMdTransform(id)
            }
        },
        async handleHotUpdate(ctx) {
            const {file} = ctx
            if (fileRegex.test(file)) {
                const code = await getMdTransform(file)
                return vuePlugin.handleHotUpdate({
                    ...ctx,
                    read: () => code
                })
            }
        }
    }
    return [demoTransitionVitePlugin,vuePlugin]
}
module.exports = vitePlugin
