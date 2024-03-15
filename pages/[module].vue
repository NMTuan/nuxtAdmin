<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:18:04
 * @LastEditTime: 2024-03-15 15:03:06
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\pages\[module].vue
-->

<template>
    <NuxtPage />
</template>

<script setup>

const route = useRoute()
const routeStore = useRouteStore()

const { module } = route.params

const moduleInfo = computed(() => {
    return routeStore.routes.find(route => route.route === `${module}`) || {}
})
provide('moduleInfo', moduleInfo)

</script>
