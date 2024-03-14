<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-14 09:03:14
 * @LastEditTime: 2024-03-14 10:51:03
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\header\item.vue
-->
<template>
    <UButton :icon="data.icon" :to="data.to" color="gray" square variant="soft" size="lg" class="mr-2"
        @click="handlerClick">
        <template #leading v-if="data.avatar">
            <UAvatar :src="data.avatar" size="2xs" />
        </template>
        {{ data.label }}
    </UButton>
</template>
<script setup>
const colorMode = useColorMode()
const props = defineProps({
    item: {
        type: [Object, String],
        default: () => { }
    }
})
let evt

const isDark = computed(() => {
    return colorMode.value === 'dark'
})
const isFull = ref(false)

const data = computed(() => {
    let cfg = {}
    if (typeof props.item === 'string') {
        cfg.type = props.item
    } else {
        cfg = { ...props.item }
    }
    if (cfg.type === 'darkMode') {
        if (isDark.value) {
            cfg.icon = cfg.activeIcon || 'i-ri-moon-line'
        } else {
            cfg.icon = cfg.icon || 'i-ri-sun-line'
        }
    }
    if (cfg.type === 'fullScreen') {
        if (isFull.value) {
            cfg.icon = cfg.activeIcon || 'i-ri-fullscreen-exit-line'
        } else {
            cfg.icon = cfg.icon || 'i-ri-fullscreen-line'
        }
    }
    return cfg
})

const handlerClick = () => {
    if (data.value.type === 'darkMode') {
        colorMode.preference = isDark.value ? 'light' : 'dark'
    }
    if (data.value.type === 'fullScreen') {
        if (isFull.value) {
            document.exitFullscreen()
        } else {
            document.documentElement.requestFullscreen()
        }
    }
}

onMounted(() => {
    if (props.item === 'fullScreen' || props.item?.type === 'fullScreen') {
        evt = document.addEventListener('fullscreenchange', () => {
            console.log('listener')
            isFull.value = document?.fullscreenElement !== null
        })
    }
})
onBeforeUnmount(() => {
    if (props.item === 'fullScreen' || props.item?.type === 'fullScreen') {
        document.removeEventListener('fullscreenchange', evt)
    }
})
</script>
