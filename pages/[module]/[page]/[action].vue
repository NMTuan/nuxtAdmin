<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:16:40
 * @LastEditTime: 2024-02-29 11:05:42
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\pages\[module]\[page]\[action].vue
-->
<template>
    <div>
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
