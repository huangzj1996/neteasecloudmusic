<template>
    <div class="hide">
        <div class="icon-container">
            <div class="icon-item" v-for="item in state.iconList" :key="item.id">
                <van-image round width="0.8rem" height="0.8rem" fit="cover" :src="item.iconUrl" />
                <span class="icon-text">{{ item.name }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { geticonList } from '@/apis/search'
import { reactive } from '@vue/reactivity'
interface Icon {
    code: number
    data: Array<any>
    message: string
}
interface State {
    iconList: Array<any>
}
var state: State = reactive({
    iconList: []
})
geticonList().then((res) => {
    const result = res as Icon
    state.iconList = result.data
    // console.log(state.iconList)
})
</script>

<style lang="scss" scoped>
.hide{
    height: 2rem;
    overflow:hidden ;
}
.icon-container {
    background: transparent;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    overflow-x: scroll;
    .icon-item {
        width: 1rem;
        margin-right: 0.1rem;
        margin-left: 0.27rem;
        flex: 0 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 2.2rem;
        .van-image {
            background: red;
        }
        .icon-text {
            margin-top: 0.15rem;
            font-size: 12px;
            font-family: "微软雅黑";
            color: #7e7e7e;
        }
    }
}
</style>
