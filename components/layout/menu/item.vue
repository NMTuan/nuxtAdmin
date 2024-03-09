<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-09 09:40:00
 * @LastEditTime: 2024-03-09 14:20:16
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\menu\item.vue
-->
<template>
    <ULink :to="item?.path" activeClass="text-primary" inactiveClass="text-zinc-600 dark:text-zinc-400"
        class="items-center h-[52px] px-6 hover:bg-zinc-100 dark:hover:bg-zinc-900">
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
