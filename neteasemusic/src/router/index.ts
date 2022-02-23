import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 路由
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/index.vue')
    }
]

// 创建router实例
const router = createRouter({
    routes,
    // createWebHashHistory hash 路由
    // createWebHistory history 路由
    // createMemoryHistory 带缓存 history 路由
    history: createWebHashHistory()
})

// 导出
export default router
