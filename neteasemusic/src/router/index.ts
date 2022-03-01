import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 路由
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Layout',
        component: () => import('../layout/index.vue'),
        redirect: '/search',
        children: [
            {
                path: 'search',
                name: 'search',
                component: () => import('views/search/index.vue')
            },
            {
                path: 'podcasts',
                name: 'podcasts',
                component: () => import('views/podcasts/index.vue')
            },
            {
                path: 'my',
                name: 'my',
                component: () => import('views/my/index.vue')
            },
            {
                path: 'focus',
                name: 'focus',
                component: () => import('views/focus/index.vue')
            },
            {
                path: 'community',
                name: 'community',
                component: () => import('views/community/index.vue')
            }
        ]
    },
    {
        path: '/playDetail/:id',
        component: () => import('@/components/playDetail/index.vue'),
        props: true
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
