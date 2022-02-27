<template>
  <h1>{{ msg }}</h1>
  <svg-icon icon-class="bug"></svg-icon>
  <button @click="addcount">{{ count }}</button>
</template>

<script setup lang="ts">
import { useStore } from '@/store';
import { computed, ref } from 'vue'

defineProps<{ msg: string }>()

const store = useStore()
const count: any = computed({
  get() {
    return store.state.count
  },
  set(val) {
    return store.commit('increment', val)
  }
})

const addcount = () => {
  count.value += 1;
}
</script>


<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
