<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-11 11:27:44
 * @LastEditTime: 2024-03-15 14:26:39
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\logo.vue
-->
<template>
    <div class="flex items-center justify-center w-full h-full text-xl font-black text-primary">
        <div class="block xl:hidden">{{ $t('shortName') || $t('siteName') }}</div>
        <div class="hidden xl:block">{{ $t('siteName') }}</div>
    </div>
</template>
<script setup>

</script>
