<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-23 14:26:41
 * @LastEditTime: 2024-03-23 15:56:24
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\page\component.vue
-->
<template>
    <PageDataTable v-if="pageInfo?.component === 'dataTable'"></PageDataTable>
    <NuxtPage v-else />
</template>
<script setup>
const pageInfo = inject('pageInfo')
</script>
