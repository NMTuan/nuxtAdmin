<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-11 11:27:44
 * @LastEditTime: 2024-03-13 13:38:08
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\menu\group.vue
-->
<template>
    <div class="flex flex-col  py-3 text-gray-500 dark:text-gray-400">
        <div class="px-4 text-xs font-bold hidden xl:block">
            {{ item?.label }}
        </div>
        <slot />
        <UDivider />
    </div>
</template>
<script setup>
const props = defineProps({
    item: {
        type: Object,
        default: () => { }
    }
})
</script>
