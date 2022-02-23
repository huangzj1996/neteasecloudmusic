import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入path文件
import { resolve } from 'path'

// 按需引入组件
import styleImport, { VantResolve } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        styleImport({
            resolves: [VantResolve()]
        }),
    ],
    resolve: {
        // 配置别名
        alias: {
            '@': resolve(__dirname, 'src'),
            comps: resolve(__dirname, 'src/components'),
            apis: resolve(__dirname, 'src/apis'),
            views: resolve(__dirname, 'src/views'),
            utils: resolve(__dirname, 'src/utils'),
            routes: resolve(__dirname, 'src/routes'),
            styles: resolve(__dirname, 'src/styles')
        }
    },
    server: {
        port: 8000,
        host: '0.0.0.0',
        strictPort: true,
        open: false
    },
    css: {
        postcss: '', //内联的 PostCSS 配置（格式同 postcss.config.js），或者一个（默认基于项目根目录的）自定义的 PostCSS 配置路径。
        preprocessorOptions: {
            // 指定传递给 CSS 预处理器的选项
            scss: {
                // 全局的scss ，跨域放多个，例如：主题的变量，和一些混合等
                // additionalData: `@import "src/styles/index.scss";`,
                javascriptEnabled: true
            }
        }
    }
})
