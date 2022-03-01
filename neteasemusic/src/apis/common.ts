import { post, get } from '../utils/request'

// 调用此接口 , 传入歌单 id, 可 以获取对应歌单内的所有的音乐
//(未登录状态只能获取不完整的歌单,登录后是完整的)，但是返回的 trackIds 是完整的
export const playDetail = (id: number) => {
    return get(`/playlist/detail?id=${id}`)
}
