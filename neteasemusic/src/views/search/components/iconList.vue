<template>
    <div class="icon-container">

    </div>
</template>

<script lang="ts" setup>
import { geticonList } from '@/apis/search'
interface Icon {
    code: number
    data: Array<any>
    message: string
}
geticonList().then(res => {
    const result = res as Icon
    console.log(result);
})
</script>

<style lang="scss" scoped></style>