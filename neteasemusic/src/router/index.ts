import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 路由
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Layout',
        component: () => import('../layout/index.vue'),
        children: [
            {
                path: 'search',
                name: 'search',
                component: () => import('@/views/search/idnex.vue')
            },
            {
                path: 'podcasts',
                name: 'podcasts',
                component: () => import('@/views/podcasts/idnex.vue')
            },
            {
                path: 'my',
                name: 'my',
                component: () => import('@/views/my/idnex.vue')
            },
            {
                path: 'focus',
                name: 'focus',
                component: () => import('@/views/focus/idnex.vue')
            },
            {
                path: 'community',
                name: 'community',
                component: () => import('@/views/community/idnex.vue')
            }
        ]
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
