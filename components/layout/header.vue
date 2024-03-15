<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-08 21:51:51
 * @LastEditTime: 2024-03-15 11:46:24
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
            <LayoutHeaderItem v-for="(item) in topbar" :item="item" />
        </div>
    </div>
</template>
<script setup>

const { data } = useAuth()
const topbar = computed(() => {
    return data.value?.topbar || []
})

</script>
