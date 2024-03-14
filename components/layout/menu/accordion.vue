<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-13 09:50:29
 * @LastEditTime: 2024-03-14 18:47:13
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\menu\accordion.vue
-->
<template>
    <div class="overflow-hidden" :class="[
        isOpen && 'bg-gray-100 shadow-inner'
    ]">

        <LayoutMenuToolTip :label="item.label">
            <div class="flex items-center justify-center xl:justify-between h-[48px] px-4 mx-2 my-1 rounded relative cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900"
                @click="toggleOpen">
                <div class="flex items-center">
                    <LayoutMenuIcon :current="isOpen" :icon="item.icon" />
                    <div class="ml-2 text-base hidden xl:block">{{ item.label }}</div>
                </div>
                <UIcon name="i-tabler-chevron-down" class="flex-shrink-0 transition-all absolute xl:static bottom-0"
                    :class="[isOpen ? 'rotate-180' : '']">
                </UIcon>
            </div>
        </LayoutMenuToolTip>

        <div ref="el" :style="{ height: chldrenHeight }" class="transition-all overflow-hidden">
            <slot />
        </div>
    </div>
</template>
<script setup>
const route = useRoute()
const props = defineProps({
    item: {
        type: Object,
        default: () => { }
    }
})

const chldrenHeight = ref('0')
const el = ref()
// 子元素实际高度
const scrollHeight = computed(() => {
    return el?.value?.scrollHeight ? `${el.value.scrollHeight}px` : '0'
})
const isOpen = ref(false)   // 默认展开

const toggleOpen = () => {
    isOpen.value = !isOpen.value
}

watchEffect(() => {
    if (isOpen.value) {
        chldrenHeight.value = scrollHeight.value
    }
    else {
        chldrenHeight.value = '0'
    }
})


watchEffect(() => {
    // 自动展开、关闭当前菜单
    if (props.item.path === `/${route.params.module}/${route.params.page}`) {
        isOpen.value = true
    } else {
        isOpen.value = false
    }
})
</script>
