<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-08 16:55:04
 * @LastEditTime: 2024-02-10 20:06:03
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: /nuxtAdmin/pages/index.vue
-->
<template>
    <div>
        <h1>index page</h1>
        <pre>{{ userStore.menu }}</pre>
    </div>
</template>
<script setup>
const userStore = useUserStore()
</script>
