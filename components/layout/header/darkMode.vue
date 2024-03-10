<template>
    <UButton v-if="state" @click="$colorMode.preference = 'light'" color="zinc" square variant="soft"
        icon="i-ri-moon-line" size="lg" class="mr-2" />
    <UButton v-else @click="$colorMode.preference = 'dark'" color="zinc" square variant="soft" icon="i-ri-sun-line"
        size="lg" class="mr-2" />
</template>
<script setup>
const colorMode = useColorMode()
const state = computed(() => {
    return colorMode.value === 'dark'
})
</script>
