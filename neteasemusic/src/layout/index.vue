<template>
    <div class="app-container">
        <component :is="Default"></component>
    </div>
</template>

<script lang="ts" setup>
import Default from './main/index.vue'
</script>

<style scoped lang="scss">
.app-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #DBDADA, #fff 35%);
}
</style>
