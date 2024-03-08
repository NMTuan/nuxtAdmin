<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-08 16:57:23
 * @LastEditTime: 2024-03-08 15:09:56
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\layouts\default.vue
-->

<template>
    <div>
        <slot></slot>
    </div>
</template>

<script setup>
const userStore = useUserStore()
const config = useRuntimeConfig()
const { data, status } = useAuth()
provide('baseURL', config.public.auth.baseURL)
</script>
