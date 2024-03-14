<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-08 21:51:51
 * @LastEditTime: 2024-03-14 10:49:36
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\header.vue
-->
<template>
    <div class="flex items-center justify-between px-8 h-full">
        <div>
            <LayoutHeaderBreadcrumb />
        </div>
        <div class="flex items-center">
            <template v-for="(item) in topbar">
                <UDropdown v-if="item.type === 'dropdown'" :items="handlerItems(item)" mode="click"
                    :popper="{ arrow: true }">
                    <LayoutHeaderItem :item="item" />
                </UDropdown>
                <LayoutHeaderItem v-else :item="item" />
            </template>
        </div>
    </div>
</template>
<script setup>

const { data } = useAuth()
const topbar = computed(() => {
    return data.value.topbar
})

const handlerItems = ({ items }) => {
    if (!Array.isArray(items)) {
        return []
    }
    if (!Array.isArray(items[0])) {
        return [items]
    }
    return items
}
</script>
