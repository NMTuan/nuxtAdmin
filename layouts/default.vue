<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-27 13:47:55
 * @LastEditTime: 2024-03-23 16:29:21
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\layouts\default.vue
-->

<template>
    <div class="flex">
        <!-- 90 280 -->
        <div class="flex flex-col flex-shrink-0 w-[90px] xl:w-[280px] shadow-xl dark:shadow-gray-950 xl:shadow-none h-screen border-r-none
            xl:border-r sticky top-0 z-[11] transition-all dark:border-gray-950 dark:bg-gray-900">
            <div class="h-[74px] flex-shrink-0">
                <LayoutLogo />
            </div>
            <div class="flex-1 overflow-hidden">
                <LayoutMenu />
            </div>
        </div>
        <div class="flex-1">
            <div class="h-[74px] sticky top-0 z-10 bg-gray-50/75 dark:bg-gray-900 backdrop-blur ">
                <LayoutHeader />
            </div>
            <div class="pt-8 pb-8 px-8">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
provide('baseURL', config.public.auth.baseURL)
</script>
