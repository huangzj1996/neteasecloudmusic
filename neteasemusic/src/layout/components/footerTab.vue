<template>
    <van-tabbar
        v-model="active"
        active-color="#FE3A39"
        inactive-color="#B3B3B3"
        class="footerTab"
        route
    >
        <van-tabbar-item to="/search">
            <span>发现</span>
            <template #icon="props">
                <svg-icon v-if="props.active" icon-class="music" class="tabicon"></svg-icon>
                <svg-icon v-else icon-class="music1" class="tabicon"></svg-icon>
            </template>
        </van-tabbar-item>
        <van-tabbar-item to="/podcasts" icon="search">
            <span>播客</span>
            <template #icon="props">
                <svg-icon v-if="props.active" icon-class="podcats1" class="tabicon"></svg-icon>
                <svg-icon v-else icon-class="podcasts" class="tabicon"></svg-icon>
            </template>
        </van-tabbar-item>
        <van-tabbar-item to="/my" icon="search">
            <span>我的</span>
            <template #icon="props">
                <svg-icon v-if="props.active" icon-class="my1" class="tabicon"></svg-icon>
                <svg-icon v-else icon-class="my" class="tabicon"></svg-icon>
            </template>
        </van-tabbar-item>
        <van-tabbar-item to="/focus" icon="search">
            <span>关注</span>
            <template #icon="props">
                <svg-icon v-if="props.active" icon-class="focus1" class="tabicon"></svg-icon>
                <svg-icon v-else icon-class="focus" class="tabicon"></svg-icon>
            </template>
        </van-tabbar-item>
        <van-tabbar-item to="/community" icon="search">
            <span>云村</span>
            <template #icon="props">
                <svg-icon v-if="props.active" icon-class="community1" class="tabicon"></svg-icon>
                <svg-icon v-else icon-class="community" class="tabicon"></svg-icon>
            </template>
        </van-tabbar-item>
    </van-tabbar>
</template>

<script lang="ts" setup>
import { ref } from '@vue/reactivity'

const active = ref('/')
const icon = {
    active: 'https://img.yzcdn.cn/vant/user-active.png',
    inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
}
</script>

<style lang="scss" scoped>
.footerTab {
    height: 1.28rem;
    bottom: 0.05rem;
    font-family: "微软雅黑";
    .van-tabbar-item {
        justify-content: space-evenly;
        &:deep(.van-tabbar-item__icon) {
            height: 0.53rem;
            width: 0.6rem;
        }
        &:deep(.tabicon) {
            width: 0.65rem;
            height: 0.65rem;
        }
    }
}
</style>
