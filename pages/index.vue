<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-08 16:55:04
 * @LastEditTime: 2024-02-27 14:36:50
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\pages\index.vue
-->
<template>
    <div>
        <h1>index page</h1>
        <div class="flex">
            <pre>menu:{{ userStore.menu }}</pre>
            <pre>routes:{{ userStore.routes }}</pre>
        </div>
    </div>
</template>
<script setup>
const userStore = useUserStore()
</script>
