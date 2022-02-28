import { post, get } from '../utils/request'

// 调用此接口 , 可获取 banner( 轮播图 ) 数据
// type:资源类型,对应以下类型,默认为 0 即 PC 0: pc ,1: android,2: iphone,3: ipad
export const getBanner = (type: number) => {
    return get(`/banner?type=${type}`, {})
}

// 调用此接口 , 可获取 APP 首页圆形图标入口列表
export const geticonList = ()=>{
    return get('/homepage/dragon/ball')
}

// 调用此接口 , 可获取推荐歌单
export const recommendPlaylist = (limit:number)=>{
    return get(`/personalized?limit=${limit}`)
}