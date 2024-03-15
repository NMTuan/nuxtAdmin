<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-14 09:03:14
 * @LastEditTime: 2024-03-15 13:38:58
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\header\item.vue
-->
<template>
    <UDropdown :items="data.items" mode="click" :popper="{ arrow: true }">
        <UChip :text="chipText > 1 ? chipText : ''" :size="chipText > 1 ? 'xl' : 'sm'" :show="chipText > 0"
            :color="color" class="mr-2">
            <UButton :icon="data.icon" :to="data.to" color="gray" :square="(data.icon || data.avatar) && !data.label"
                variant="soft" @click="handlerClick">
                <template #leading v-if="data.avatar">
                    <UAvatar :src="data.avatar" size="2xs" />
                </template>
                {{ data.label }}
            </UButton>
        </UChip>
    </UDropdown>
</template>
<script setup>

const colorMode = useColorMode()
const noticeStore = useNoticeStore()
const { locales, setLocale } = useI18n()

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
    if (cfg.type === 'i18n') {
        cfg.icon = cfg.icon || 'i-ri-translate-2'
        const items = JSON.parse(JSON.stringify(locales.value)).map((item) => {
            item.click = () => {
                setLocale(item.code)
            }
            return item
        })
        cfg.items = items
    }
    if (Array.isArray(cfg.items)) {
        if (!Array.isArray(cfg.items[0])) {
            cfg.items = [cfg.items]
        }
    }

    return cfg
})

const chipText = computed(() => {
    if (props.item?.noticeKey && noticeStore.state[props.item.noticeKey]) {
        return noticeStore.state[props.item.noticeKey].count || 0
    }
    return 0
})
const color = computed(() => {
    if (props.item?.noticeKey && noticeStore.state[props.item.noticeKey]) {
        return noticeStore.state[props.item.noticeKey].color || 'primary'
    }
    return 'primary'

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
