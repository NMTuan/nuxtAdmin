<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-09 09:43:33
 * @LastEditTime: 2024-03-09 14:15:49
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\menu\list.vue
-->
<template>
    <div v-for="item in children">
        <template v-if="Array.isArray(item.children)">
            <LayoutMenuGroup :item="item" />
            <LayoutMenuList :children="item.children" />
        </template>
        <template v-else>
            <UTooltip class="block xl:hidden" :text="item.label" :popper="{ arrow: true, placement: 'right' }"
                :ui="{ base: 'text-base h-10 px-4 py-2' }">
                <LayoutMenuItem class="flex justify-center mx-2" :item="item" />
            </UTooltip>
            <LayoutMenuItem class="hidden xl:flex mx-2" :item="item" />
        </template>
    </div>
</template>
<script setup>
const props = defineProps({
    children: {
        type: Array,
        default: () => []
    }
})
</script>
