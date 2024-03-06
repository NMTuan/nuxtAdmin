<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:18:04
 * @LastEditTime: 2024-03-06 17:18:55
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\pages\[module].vue
-->

<template>
    <div class="border p-4 m-4">
        module
        <p>params: {{ $route.params }}</p>
        <p>config: {{ pageStore.moduleConfig }}</p>
        <p>status: {{ status }}</p>
        <p>token: {{ token }}</p>
        <!-- <pre>data: {{ data }}</pre> -->
        <NuxtPage />
    </div>
</template>

<script setup>
const pageStore = usePageStore()
const { status, token, data } = useAuth()
</script>
