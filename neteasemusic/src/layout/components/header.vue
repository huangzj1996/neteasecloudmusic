<template>
    <header>
        <div class="left" @click="openPopup">
            <svg-icon icon-class="菜单" class="header-tabicon"></svg-icon>
        </div>
        <div class="center">
            <div class="input">
                <svg-icon icon-class="搜索"></svg-icon>
                <span class="input-text">xxxx</span>
            </div>
        </div>
        <div class="rigth">
            <svg-icon icon-class="麦克风" class="header-tabicon"></svg-icon>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";

// 控制弹出层显示和隐藏
const popupFlag = ref(false)
// 定义emit
const emit = defineEmits(['onclick'])
const openPopup = () => {
    // 每次点击时取反
    popupFlag.value = !popupFlag.value
    emit("onclick", popupFlag.value)
}
</script>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1rem;
    .left {
        margin-left: 0.25rem;
        &::active {
            color: #707070;
        }
    }
    .rigth {
        margin-right: 0.25rem;
        &:active {
            color: #707070;
        }
    }
    .center {
        .input {
            width: 5.5rem;
            height: 0.65rem;
            background: #fff;
            border-radius: 19.98rem;
            display: flex;
            justify-content: center;
            align-items: center;
            .input-text {
                color: #cacacb;
                margin-left: 0.1rem;
            }
        }
    }
    &:deep(.header-tabicon) {
        width: 0.45rem;
        height: 0.45rem;
    }
}
</style>