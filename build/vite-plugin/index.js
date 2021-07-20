
const createVuePlugin = require('@vitejs/plugin-vue')



const vuePlugin = createVuePlugin({
    include: [/\.vue$/, /\.md$/, /\.entry$/]
})
const vitePlugin = ()=>{
    return [vuePlugin]
}
module.exports = vitePlugin
