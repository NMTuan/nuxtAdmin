<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-09 09:40:00
 * @LastEditTime: 2024-03-23 16:26:12
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\menu\item.vue
-->
<template>
    <ULink :to="item?.path ? localePath(item.path) : undefined" activeClass="text-primary"
        inactiveClass="text-gray-600 dark:text-gray-400" class="items-center h-[48px] px-4 my-1 rounded"
        :class="handlerClass">
        <LayoutMenuIcon :current="current" :icon="item.icon" />
        <div class="ml-2 text-base hidden xl:block">
            {{ item.label }}
        </div>
    </ULink>
</template>
<script setup>
const route = useRoute()
const localePath = useLocalePath()
const props = defineProps({
    item: {
        type: Object,
        default: () => { }
    },
    level: {
        type: Number,
        default: 1
    }
})
const current = computed(() => {
    return route.path === props.item?.path
})

const handlerClass = computed(() => {
    if (current.value) {
        return 'bg-primary-100 dark:bg-gray-950'
    }
    if (props.level >= 3) {
        return 'hover:bg-gray-200 dark:hover:bg-gray-950/30'
    }
    return 'hover:bg-gray-100 dark:hover:bg-gray-950/30'
})
</script>
