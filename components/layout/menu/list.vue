<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-09 09:43:33
 * @LastEditTime: 2024-03-13 15:12:34
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\menu\list.vue
-->
<template>
    <div v-for="item in children">
        <template v-if="Array.isArray(item.children)">
            <LayoutMenuGroup v-if="level === 1" :item="item">
                <LayoutMenuList :children="item.children" :level="level + 1" />
            </LayoutMenuGroup>
            <LayoutMenuAccordion v-else :item="item">
                <LayoutMenuList :children="item.children" :level="level + 1" />
            </LayoutMenuAccordion>
        </template>
        <LayoutMenuToolTip v-else :label="item.label">
            <LayoutMenuItem class="flex mx-2" :item="item" :level="level" />
        </LayoutMenuToolTip>
    </div>
</template>
<script setup>
const props = defineProps({
    children: {
        type: Array,
        default: () => []
    },
    level: {
        type: Number,
        default: 1
    }
})
</script>
