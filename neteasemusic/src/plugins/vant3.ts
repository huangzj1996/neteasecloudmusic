import { App } from 'vue'

import { Button,Tabbar, TabbarItem  } from 'vant'


export default function (app: App<Element>) {
    // 按需引入
    app.use(Button).use(Tabbar).use(TabbarItem)
}
