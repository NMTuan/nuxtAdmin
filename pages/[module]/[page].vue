<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:18:04
 * @LastEditTime: 2024-03-04 10:23:55
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\pages\[module]\[page].vue
-->
<template>
    <div class="border p-4 m-4">
        page
        <p>params: {{ $route.params }}</p>
        <p>config: {{ pageStore.pageConfig }}</p>
        <hr>
        <LayoutPageDataTable v-if="pageStore.pageConfig.layout === 'dataTable'"></LayoutPageDataTable>
        <LayoutPageView v-if="pageStore.pageConfig.layout === 'view'"></LayoutPageView>
    </div>
</template>
<script setup>
const pageStore = usePageStore()
</script>
