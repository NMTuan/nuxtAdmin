<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-08 16:57:23
 * @LastEditTime: 2024-03-07 13:20:47
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\layouts\default.vue
-->

<template>
    <div>
        <div>baseURL: {{ config.public.auth.baseURL }}</div>
        <hr>
        <div>user: {{ data }}</div>
        <hr>
        <div>
            <template v-for="route in userStore.routes">
                <ULink v-if="(route?.__type !== 'action')" :to="route.path" class="mx-4">
                    [{{ route.name }}]
                </ULink>
            </template>
        </div>
        <slot></slot>
        <pre>routes: {{ userStore.routes }}</pre>

    </div>
</template>

<script setup>
const userStore = useUserStore()
const config = useRuntimeConfig()
const { data } = useAuth()
provide('baseURL', config.public.auth.baseURL)
</script>
