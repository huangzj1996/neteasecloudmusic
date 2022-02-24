<template>
    <van-tabbar
        v-model="active"
        active-color="#FE3A39"
        inactive-color="#B3B3B3"
        class="footerTab"
    >
        <van-tabbar-item badge="3">
            <span>发现</span>
            <template #icon="props">
                <img :src="props.active ? icon.active : icon.inactive" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item icon="search">播客</van-tabbar-item>
        <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
        <van-tabbar-item icon="setting-o">关注</van-tabbar-item>
        <van-tabbar-item icon="setting-o">云村</van-tabbar-item>
    </van-tabbar>
</template>

<script lang="ts" setup>
import { ref } from '@vue/reactivity'

const active = ref(0)
const icon = {
    active: 'https://img.yzcdn.cn/vant/user-active.png',
    inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
}
</script>

<style lang="scss" scoped>
.footerTab {
    height: 1rem;

    .van-tabbar-item {
        justify-content: space-evenly;
        &:deep(.van-tabbar-item__icon) {
            height: 0.4rem;
            width: 0.4rem;
        }
        .active {
            color: white;
            z-index: 1;
            position: relative;
            &::before {
                content: '';
                height: 0.65rem;
                width: 0.65rem;
                display: inline-block;
                position: absolute;
                top: -0.2rem;
                left: -0.09rem;
                z-index: -1;
                background: linear-gradient(to top right, #ff3627, #fe999e);
                border-radius: 50%;
            }
        }
    }
}
</style>
