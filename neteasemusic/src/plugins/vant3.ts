import { App } from 'vue'

import { Button, Tabbar, TabbarItem, Search, Popup, Icon, Image as VanImage, Swipe, SwipeItem } from 'vant'


export default function (app: App<Element>) {
    // 按需引入
    app.use(Button).use(Tabbar).use(TabbarItem).use(Search).use(Popup).use(Icon).use(VanImage).use(Swipe).use(SwipeItem)
}
