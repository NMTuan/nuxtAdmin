<template>
    <UButton v-if="state" @click="fullScreenExit" color="zinc" square variant="soft" icon="i-ri-fullscreen-exit-line"
        size="lg" class="mr-2" />
    <UButton v-else @click="fullScreen" color="zinc" square variant="soft" icon="i-ri-fullscreen-line" size="lg"
        class="mr-2" />
</template>
<script setup>
const state = ref(false)
let evt
const fullScreen = () => {
    document.documentElement.requestFullscreen();
}
const fullScreenExit = () => {
    document.exitFullscreen();
}

onMounted(() => {
    evt = document.addEventListener('fullscreenchange', () => {
        state.value = document?.fullscreenElement !== null
    })
})
onBeforeUnmount(() => {
    document.removeEventListener('fullscreenchange', evt)
})

</script>
