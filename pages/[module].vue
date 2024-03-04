<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:18:04
 * @LastEditTime: 2024-02-29 12:13:14
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\pages\[module].vue
-->
<template>
    <div class="border p-4 m-4">
        module
        <p>params: {{ $route.params }}</p>
        <p>config: {{ pageStore.moduleConfig }}</p>
        <NuxtPage />
    </div>
</template>
<script setup>
const pageStore = usePageStore()
</script>
