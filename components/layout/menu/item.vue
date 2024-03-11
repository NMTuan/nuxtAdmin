<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-09 09:40:00
 * @LastEditTime: 2024-03-09 21:01:45
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\menu\item.vue
-->
<template>
    <ULink :to="item?.path" activeClass="text-primary" inactiveClass="text-gray-600 dark:text-gray-400"
        class="items-center h-[48px] px-6 my-1 rounded" :class="[
        current ? 'bg-primary-100 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-900',
    ]">
        <UIcon v-if="current" :name="item.activeIcon || item.icon || 'i-tabler-point-filled'" size="22"
            class="flex-shrink-0" />
        <UIcon v-else :name="item.icon || 'i-tabler-point'" size="22" class="flex-shrink-0" />
        <div class="ml-4 text-base hidden xl:block">{{ item.label }}</div>
    </ULink>
</template>
<script setup>
const route = useRoute()
const props = defineProps({
    item: {
        type: Object,
        default: () => { }
    }
})
const current = computed(() => {
    return route.path === props.item?.path
})
</script>
