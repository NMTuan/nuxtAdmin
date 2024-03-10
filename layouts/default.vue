<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-27 13:47:55
 * @LastEditTime: 2024-03-10 08:55:29
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\layouts\default.vue
-->
<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-08 16:57:23
 * @LastEditTime: 2024-03-08 22:28:14
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\layouts\default.vue
-->

<template>
    <div class="flex">
        <div
            class="flex flex-col flex-shrink-0 w-[90px] xl:w-[280px] shadow-xl xl:shadow-none h-screen border-r-none xl:border-r sticky top-0 z-10">
            <div class="h-[74px] flex-shrink-0">
                <LayoutLogo />
            </div>
            <div class="flex-1 overflow-hidden">
                <LayoutMenu />
            </div>
        </div>
        <div class="flex-1">
            <div class="h-[74px] sticky top-0 z-10 bg-zinc-50/75 dark:bg-zinc-950/75 backdrop-blur ">
                <LayoutHeader />
            </div>
            <div class=" py-4">
                <div class="flex justify-end">
                    <!-- <LayoutHeaderUser /> -->

                </div>

                <slot></slot>
                <p v-for="i in 50">{{ i }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const userStore = useUserStore()
const config = useRuntimeConfig()
const { data, status } = useAuth()
provide('baseURL', config.public.auth.baseURL)
</script>
