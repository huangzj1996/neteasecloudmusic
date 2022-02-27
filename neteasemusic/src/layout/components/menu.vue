<template>
    <van-popup v-model:show="show" position="left" :style="{ height: '100%', width: '84%' }">
        <div class="top">
            <div class="login" @click="login">
                <van-image
                    width="0.5rem"
                    height="0.5rem"
                    round
                    fit="cover"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <span>
                    立即登录
                    <van-icon name="arrow" />
                </span>
            </div>
            <div @click="scan">扫描</div>
        </div>
    </van-popup>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
// 定义传入的props参数
interface Props {
    // 通过 v-model:show 控制弹出层是否展示。
    show: boolean
}
// 给props设置默认值
const props = withDefaults(defineProps<Props>(), {
    show: false
})

// 登录
const login = ()=>{
    console.log('登录');
}

// 扫描
const scan = ()=>{
    console.log('扫描');
    
}
</script>

<style lang="scss" scoped>
.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.7rem;
    padding: 0px 0.2rem;
    position: fixed;
    width: 100%;
    .login{
        .van-image{
            vertical-align: bottom;
        }
    }
}
</style>
