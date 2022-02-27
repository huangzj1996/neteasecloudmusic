<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in state.imgList" :key="item.pic">
            <img :src="item.pic" />
        </van-swipe-item>
    </van-swipe>
</template>

<script lang="ts" setup>
import { getBanner } from '@/apis/search'
import { reactive, ref } from '@vue/reactivity';
interface Banners {
    banners: Array<any>,
    code: number
}
interface State{
    imgList:Array<any>
}
const type = ref(1)
const state = reactive<State>({
    imgList: []
})
getBanner(type.value).then(res => {
    const result = res as Banners
    state.imgList = result.banners
})
</script>

<style lang="scss" scoped>
.van-swipe{
    padding:0 0.27rem;
    padding-top: 0.2rem;
    .van-swipe-item{
        img{
            height: 2.73rem;
            border-radius: 0.25rem;
        }
    }
}
</style>
