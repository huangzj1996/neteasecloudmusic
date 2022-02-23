import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import { App } from 'vue'
import { RootStateTypes } from './interface/index'
import app from './modules/app'

// 为 store state 声明类型
// export interface State {
//     count: number
// }
// 定义 injection key
export const key: InjectionKey<Store<RootStateTypes>> = Symbol()
const store = createStore<RootStateTypes>({
    modules: {
        app
    }
})
// 将类型注入useStore
export const useStore = () => {
    return baseUseStore(key)
}

// 配置store
export function setupStore(app: App<Element>) {
    app.use(store, key)
}

export default store
