<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-01-04 18:31:48
 * @LastEditTime: 2024-03-14 19:24:39
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\app.vue
-->

<template>
    <NuxtLayout>
        <NuxtPage />
        <UNotifications />
    </NuxtLayout>
</template>
<script setup>
import 'simplebar-vue/dist/simplebar.min.css';

</script>
<style lang="scss">
* {
    // @apply transition-all duration-300;
}

html {
    @apply bg-gray-50;

    &.dark {
        @apply bg-gray-950;
        @apply text-gray-200;
    }
}

// 滚动区域focus时有一圈黑框，去掉
.simplebar-content-wrapper {
    @apply outline-none;
}
</style>
