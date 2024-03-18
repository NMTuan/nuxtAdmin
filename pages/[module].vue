<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:18:04
 * @LastEditTime: 2024-03-18 10:40:17
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\pages\[module].vue
-->

<template>
    <PageDataTable v-if="moduleInfo.component === 'dataTable'"></PageDataTable>
    <NuxtPage v-else />
</template>

<script setup>

const route = useRoute()
const routeStore = useRouteStore()
const { token } = useAuth()
const baseURL = inject('baseURL')
const { module } = route.params

const moduleInfo = computed(() => {
    return routeStore.routes.find(route => route.route === `${module}`) || {}
})
provide('moduleInfo', moduleInfo)

// 获取数据
const pageFetch = (query = {}, watch = []) => {
    return useLazyFetch(`${baseURL}${moduleInfo.value.path}`, {
        method: moduleInfo.fetchType || 'GET',
        headers: {
            Authorization: token.value
        },
        query,
        watch
    })
}
provide('moduleFetch', pageFetch)
provide('pageFetch', pageFetch)

const pageActions = computed(() => {
    return routeStore.routes.filter(route => route.route.startsWith(`${module}__`) && route.__type === 'action')
})
provide('moduleActions', pageActions)
provide('pageActions', pageActions)

</script>
