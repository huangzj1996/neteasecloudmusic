<template>
    <div class="header"></div>
    <div class="mainview">
    </div>
    <div class="footer">
        <van-tabbar v-model="active" active-color="#FE3A39" inactive-color="#B3B3B3">
            
            <van-tabbar-item icon="home-o">
                <span>自定义</span>
                <template #icon="props">
                    <span>{{props}}</span>
                </template>
            </van-tabbar-item>
            <van-tabbar-item icon="search">标签</van-tabbar-item>
            <van-tabbar-item icon="search">标签</van-tabbar-item>
            <van-tabbar-item icon="search">标签</van-tabbar-item>
            <van-tabbar-item icon="search">标签</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";

const active = ref(0)
const icon = {
      active: 'https://img.yzcdn.cn/vant/user-active.png',
      inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
    };
</script>

<style lang="scss" scoped></style>
