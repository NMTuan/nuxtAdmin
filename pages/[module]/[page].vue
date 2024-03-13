<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:18:04
 * @LastEditTime: 2024-03-13 15:25:47
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\pages\[module]\[page].vue
-->

<template>
    <PageDataTable v-if="pageInfo.component === 'dataTable'"></PageDataTable>
    <NuxtPage v-else />
    <pre>{{ routeStore.routes }}</pre>
</template>

<script setup>
const route = useRoute()
const routeStore = useRouteStore()
const { token, } = useAuth()

// const moduleInfo = inject('moduleInfo')
const baseURL = inject('baseURL')
const { module, page } = route.params
const pageInfo = computed(() => {
    return routeStore.routes.find(route => route.route === `${module}__${page}`) || {}
})
provide('pageInfo', pageInfo)

// 获取数据
const pageFetch = (query = {}, watch = []) => {
    return useLazyFetch(`${baseURL}${pageInfo.value.path}`, {
        method: pageInfo.fetchType || 'GET',
        headers: {
            Authorization: token.value
        },
        query,
        watch
    })
}
provide('pageFetch', pageFetch)

const pageActions = computed(() => {
    return routeStore.routes.filter(route => route.route.startsWith(`${module}__${page}__`) && route.__type === 'action')
})
provide('pageActions', pageActions)

const pageChildren = computed(() => {
    return routeStore.routes.filter(route => route.route.startsWith(`${module}__${page}__`) && route.__type !== 'action')
})
</script>
