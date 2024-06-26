<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-14 09:03:14
 * @LastEditTime: 2024-04-03 14:31:19
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\header\item.vue
-->
<template>
    <UDropdown :items="dropDown" mode="click" :popper="{ arrow: true }">
        <UChip :text="chipText > 1 ? chipText : ''" :size="chipText > 1 ? 'xl' : 'sm'" :show="chipText > 0"
            :color="color" class="mr-2">
            <UButton :icon="icon" :to="item.to ? localePath(item.to) : undefined" color="gray"
                :square="(icon || item.image) && !item.label" variant="soft" @click="handlerClick">
                <template #leading v-if="item.image">
                    <UAvatar :src="item.image" size="2xs" />
                </template>
                {{ item.label }}
            </UButton>
        </UChip>
    </UDropdown>
</template>
<script setup>

const colorMode = useColorMode()
const noticeStore = useNoticeStore()
const { locales, setLocale } = useI18n()
const localePath = useLocalePath()

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

const icon = computed(() => {
    if (props.item.component === 'darkMode') {
        if (isDark.value) {
            return props.item.activeIcon
        }
        return props.item.icon
    }
    if (props.item.component === 'fullScreen') {
        if (isFull.value) {
            return props.item.activeIcon
        }
        return props.item.icon
    }
    return props.item.icon || undefined
})

const dropDown = computed(() => {
    if (props.item.component === 'i18n') {
        return locales.value.reduce((total, item) => {
            const newItem = JSON.parse(JSON.stringify(item))
            newItem.click = () => {
                setLocale(newItem.code)
            }
            total[0].push(newItem)
            return total
        }, [[]])

    }
    // 如果是一维数组，强制转换成二维
    if (Array.isArray(props.item.dropDown) && props.item.dropDown.length === props.item.dropDown.flat().length) {
        return [props.item.dropDown]
    }
    return props.item.dropDown || undefined
})

const chipText = computed(() => {
    if (props.item?.noticeKey && noticeStore.state[props.item.noticeKey]) {
        let count
        if (['string', 'number'].includes(typeof noticeStore.state[props.item.noticeKey])) {
            count = noticeStore.state[props.item.noticeKey]
        } else {
            count = noticeStore.state[props.item.noticeKey].count || 0
        }
        if (typeof count === 'string') {
            return Number(count)
        } else {
            return count
        }
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
    if (props.item.component === 'darkMode') {
        colorMode.preference = isDark.value ? 'light' : 'dark'
    }
    if (props.item.component === 'fullScreen') {
        if (isFull.value) {
            document.exitFullscreen()
        } else {
            document.documentElement.requestFullscreen()
        }
    }
}

onMounted(() => {
    if (props.item === 'fullScreen' || props.item.component === 'fullScreen') {
        evt = document.addEventListener('fullscreenchange', () => {
            isFull.value = document?.fullscreenElement !== null
        })
    }
})
onBeforeUnmount(() => {
    if (props.item === 'fullScreen' || props.item.component === 'fullScreen') {
        document.removeEventListener('fullscreenchange', evt)
    }
})
</script>
