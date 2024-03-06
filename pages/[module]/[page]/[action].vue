<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:16:40
 * @LastEditTime: 2024-03-04 10:25:13
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\pages\[module]\[page]\[action].vue
-->
<template>
    <div class="border p-4 m-4">
        action
        <p>params: {{ $route.params }}</p>
        <p>config: {{ pageStore.actionConfig }}</p>
        <p>query: {{ $route.query }}</p>
        <hr>
        <LayoutActionView v-if="pageStore.actionConfig.layout === 'view'"></LayoutActionView>
        <LayoutActionEdit v-if="pageStore.actionConfig.layout === 'edit'"></LayoutActionEdit>
        <LayoutActionDelete v-if="pageStore.actionConfig.layout === 'delete'"></LayoutActionDelete>
    </div>
</template>
<script setup>
const pageStore = usePageStore()
</script>
