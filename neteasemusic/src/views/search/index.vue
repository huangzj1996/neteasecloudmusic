<template>
    <div class="search">
        <div class="top">
            <Swpie></Swpie>
            <IconList></IconList>
            <van-divider />
            <RecommendPlaylist></RecommendPlaylist>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Swpie from './components/swpie.vue'
import IconList from './components/iconList.vue'
import RecommendPlaylist from './components/recommendPlaylist.vue'
</script>

<style lang="scss" scoped>
.search {
    background: linear-gradient(180deg, #dbdada, #fff 15%);
    .van-divider {
        margin: 0;
    }
}
</style>
