<template>
    <div class="play-container">
        <div class="play-title">
            <span class="recommend">推荐歌单</span>
            <span class="more">更多<van-icon name="arrow" /></span>
        </div>
        <div class="play-list">
            <div class="play-item">
                <van-image
                    width="1rem"
                    height="3rem"
                    fit="contain"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <span class="name">ssss</span>
                <span class="playCount">111万</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { recommendPlaylist } from '@/apis/search'
import { ref } from '@vue/reactivity'

let playList = ref([])
recommendPlaylist(10).then((res) => {
    console.log(res.result)
    playList = res.result
})
</script>

<style lang="scss" scoped>
.play-container {
    background: transparent;
    .play-title {
        display: flex;
        justify-content: space-between;
        padding: 0 0.27rem;
        align-items: center;
        height: 1rem;
        .recommend {
            font-size: 20px;
            font-weight: 500;
            font-family: '微软雅黑';
        }
        .more {
            border: 1px solid #e9e9e9;
            border-radius: 19.7rem;
        }
    }
}
</style>
