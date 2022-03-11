<template>
    <div class="play-detail">
        <van-nav-bar>
            <template #left>
                <van-icon name="arrow-left" size="24" @click="goBack()" />
            </template>
            <template #title>
                <span class="title">歌单</span>
            </template>
            <template #right>
                <van-icon name="search" size="24" />
                <svg-icon icon-class="more"></svg-icon>
            </template>
        </van-nav-bar>
        <div class="user-detail">
            <div class="cover">
                <van-image
                    width="2.5rem"
                    height="2.5rem"
                    fit="contain"
                    :src="state.playList.coverImgUrl ? state.playList.coverImgUrl : 'src/assets/w.jpg'"
                />
                <span class="playCount" v-if="state.playList.coverImgUrl">
                    <svg-icon icon-class="play"></svg-icon>
                    {{ comput.countNumber(state.playList.playCount) }}万
                </span>
            </div>
            <div class="user-info">
                <div class="user-info-title">
                    [运动随身听] 必听活力音乐燃料 今天运动了吗
                </div>
                <div class="user-info-detail">
                    <van-image
                        width="0.5rem"
                        height="0.5rem"
                        fit="contain"
                        round
                        :src="state.playList.creator.avatarUrl ? state.playList.creator.avatarUrl : 'src/assets/w.jpg'"
                    />
                    <span>{{state.playList.creator.nickname}}</span>
                    <span><van-icon name="plus" /></span>
                </div>
                <div>{{state.playList.description}}<van-icon name="arrow" color="rgb(179, 179, 179)"/></div>
            </div>
        </div>
        <img class="cover-img" :src="state.playList.coverImgUrl" alt />
    </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import usePlayCount from '@/hooks/usePlayCount'
import { playDetail } from '../../apis/common'
// 获取通过路由传过来的歌单id
const props = defineProps(['id'])
const state = reactive({
    playList:{}
})

const router = useRouter()

const comput = usePlayCount()
// 返回按钮
const goBack = () => {
    router.back()
}
// 初始化时候获取数据
onMounted(() => {
    playDetail(props.id).then((res: any) => {
        state.playList = res.playlist
        console.log(state.playList)
    })
})
</script>

<style lang="scss" scoped>
.play-detail {
    width: 100%;
    height: 100%;
    .van-nav-bar {
        background: transparent;
        .van-icon {
            color: #fff;
        }
        .svg-icon {
            width: 1.7em;
            height: 1.7em;
            margin-left: 0.2rem;
        }
        .title {
            font-size: 20px;
            font-family: '微软雅黑';
            // font-weight: 600;
            color: #fff;
        }
    }
    .van-hairline--bottom::after {
        border: none;
    }
    .user-detail {
        display: flex;
        align-items: center;
        .cover {
            width: 2.5rem;
            height: 2.5rem;
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
        .user-info{
            margin: 0 0.2rem;
            height: 100%;
            .user-info-title{
                font-size: 18px;
                // font-weight: 600;
                color: #fff;
            }
            .user-info-detail{

            }
        }
    }
    .cover-img {
        position: absolute;
        top: 0;
        z-index: -1;
        width: 100%;
        filter: blur(100px);
    }
}
</style>
