<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:18:04
 * @LastEditTime: 2024-02-29 11:17:51
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\pages\[module]\[page].vue
-->
<template>
    <div>
        page
        <p>params: {{ $route.params }}</p>
        <p>config: {{ pageStore.pageConfig }}</p>
        <hr>
        <LayoutPageList v-if="pageStore.pageConfig.layout === 'list'"></LayoutPageList>
        <LayoutPageView v-if="pageStore.pageConfig.layout === 'view'"></LayoutPageView>
    </div>
</template>
<script setup>
const pageStore = usePageStore()


</script>
