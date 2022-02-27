<template>
    <Header @onclick='controlPopup'></Header>
    <MainView></MainView>
    <FooterTab></FooterTab>

    <Menu :show='show'></Menu>
</template>

<script lang="ts" setup>
import FooterTab from '../components/footerTab.vue'
import MainView from '../components/mainView.vue'
import Header from '../components/header.vue'
import Menu from '../components/menu.vue'
import { ref } from '@vue/reactivity'

const show = ref(false)
const controlPopup = (e:boolean)=>{
    show.value=e
}
</script>

<style lang="scss" scoped></style>
