import vitePlugin from './build/vite-plugin'
import { defineConfig } from 'vite'
const path = require('path')

module.exports = defineConfig({
    plugins: vitePlugin(),
    optimizeDeps: {
        entries: 'examples',
        exclude:[
            "./src/styles"
        ]
    },
    resolve: {
        alias:
            process.env.NODE_ENV !== 'production'
                ? [
                    {
                        find: 'naive-ui',
                        replacement: path.resolve(__dirname, './src')
                    }
                ]
                : undefined
    },
    ssr: true,
})
