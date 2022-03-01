<template>
    <div class="play-container">
        <div class="play-title">
            <span class="recommend">推荐歌单</span>
            <span class="more">
                更多
                <van-icon name="arrow" />
            </span>
        </div>
        <div class="hide">
            <div class="play-list">
                <div
                    class="play-item"
                    v-for="item in state.playList"
                    :key="item.id"
                    @click="toPalyDetail(item.id)"
                >
                    <van-image
                        width="2rem"
                        height="2rem"
                        fit="contain"
                        :src="item.picUrl"
                    />
                    <span class="name">{{ item.name }}</span>
                    <span class="playCount">
                        <svg-icon icon-class="play"></svg-icon>
                        {{ comput(item.playCount) }}万
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { recommendPlaylist } from '@/apis/search'
import { reactive, ref } from '@vue/reactivity'
import type { Playlist, State } from '../search'
import { useRouter } from 'vue-router'
import SvgIcon from '@/components/SvgIcon/index.vue'
let state: State = reactive({
    playList: []
})

const router = useRouter()
// 获取歌单列表
recommendPlaylist(6).then((res) => {
    const result = res as Playlist
    state.playList = result.result
})

// 计算播放量
const comput = (num: number) => {
    return (num / 10000).toFixed(0)
}

const toPalyDetail = (id: number) => {
    router.push(`/playDetail/${id}`)
}
</script>

<style lang="scss" scoped>
.play-container {
    background: transparent;
    border-bottom-left-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
    .play-title {
        display: flex;
        justify-content: space-between;
        padding: 0 0.27rem;
        align-items: center;
        height: 1rem;
        .recommend {
            font-size: 18px;
            font-weight: 600;
            font-family: '微软雅黑';
        }
        .more {
            padding: 0.04rem 0.18rem;
            border: 1px solid #e9e9e9;
            border-radius: 19.7rem;
            text-align: center;
        }
    }
    .play-list {
        display: flex;
        overflow-y: scroll;
        .play-item {
            width: 2rem;
            height: 3.4rem;
            position: relative;
            margin: 0 0.2rem;
            .van-image {
                &:deep(.van-image__img) {
                    border-radius: 0.2rem;
                }
            }
            .name {
                font-size: 14px;
                text-align: start;
                display: -webkit-box; //将对象作为弹性伸缩盒子模型显示;
                overflow: hidden;
                -webkit-box-orient: vertical; //从上到下排列子元素;
                text-overflow: ellipsis; //溢出部分用省略号代替
                -webkit-line-clamp: 2; //设置文本显示两行
            }
            .playCount {
                position: absolute;
                color: #fff;
                top: 0;
                right: 0;
                background: rgba(167, 167, 167, 0.822);
                border-radius: 19.7rem;
                padding: 0.04rem 0.16rem;
                margin: 0.08rem 0.06rem;
                font-size: 12px;
            }
        }
    }
    .hide {
        height: 3.2rem;
        overflow: hidden;
    }
}
</style>
