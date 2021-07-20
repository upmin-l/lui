import {defineConfig} from 'vite'
import vitePlugin from './build/vite-plugin'
export default defineConfig({
    plugins: vitePlugin()
})
