import { App } from 'vue'

import { Button } from 'vant'


export default function (app: App<Element>) {
    // 按需引入
    app.use(Button)
}
