<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-11 11:27:44
 * @LastEditTime: 2024-03-21 11:49:37
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\menu.vue
-->
<template>
    <simplebar class="h-full">
        <LayoutMenuList :children="routeStore.menus" :level="1" />
    </simplebar>
</template>

<script setup>
import simplebar from 'simplebar-vue';
const routeStore = useRouteStore()
</script>
