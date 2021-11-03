import vitePlugin from './build/vite-plugin'
import { defineConfig } from 'vite'

const path = require('path')

module.exports = defineConfig({
    plugins: vitePlugin(),
    resolve:{
        alias:{
            '@':path.resolve(__dirname,'src')
        }
    },
    optimizeDeps: {
        entries: 'examples',
        exclude: [
            "./src/styles",
            "./build"
        ]
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'lib/main.js'),
            name: 'lui',
            fileName: (format) => `lui.${ format }.js`
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'vue'
                }
            }
        }
    },
    ssr: true,
})
