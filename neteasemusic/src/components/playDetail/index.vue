<template>
    <div class="play-detail">
        <van-nav-bar>
            <template #left @click="goBack()">
                <van-icon name="arrow-left" size="20" />
            </template>
            <template #title>
                <span class="title"> 歌单 </span>
            </template>
            <template #right>
                <van-icon name="search" size="20" />
            </template>
        </van-nav-bar>
        <img class="cover-img" :src="state.imgUrl" alt="" />
    </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import { playDetail } from '../../apis/common'
// 获取通过路由传过来的歌单id
const props = defineProps(['id'])
const state = reactive({
    imgUrl: ''
})

const router = useRouter()
// 返回按钮
const goBack = ()=>{
    router.back()
}
// 初始化时候获取数据
onMounted(() => {
    playDetail(props.id).then((res: any) => {
        console.log(res.playlist)
        state.imgUrl = res.playlist.coverImgUrl
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
    }
    .van-hairline--bottom::after {
        border: none;
    }
    .title {
        font-size: 20px;
        font-family: '微软雅黑';
        // font-weight: 600;
        color: #fff;
    }
    .cover-img {
        z-index: -1;
        width: 100%;
        filter: blur(40px);
    }
}
</style>
