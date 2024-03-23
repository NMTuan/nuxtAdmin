<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-23 14:26:41
 * @LastEditTime: 2024-03-23 14:52:03
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\page\component.vue
-->
<template>
    <div class="border p-4">
        <div>pageChildren:</div>
        <div>{{ pageChildren }}</div>
        <PageDataTable v-if="pageInfo?.component === 'dataTable'"></PageDataTable>
        <NuxtPage v-else />
    </div>
</template>
<script setup>
const pageInfo = inject('pageInfo')
const pageChildren = inject('pageChildren')
</script>
