<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:18:04
 * @LastEditTime: 2024-02-29 11:14:28
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\pages\[module].vue
-->
<template>
    <div>
        module
        <p>params: {{ $route.params }}</p>
        <p>config: {{ pageStore.moduleConfig }}</p>
        <hr>
        <NuxtPage />
    </div>
</template>
<script setup>
const pageStore = usePageStore()

</script>
