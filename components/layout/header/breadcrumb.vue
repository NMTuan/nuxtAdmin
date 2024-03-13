<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-13 16:56:03
 * @LastEditTime: 2024-03-13 17:21:44
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\header\breadcrumb.vue
-->
<template>
    <UBreadcrumb :links="breadcrumb" divider=" / ">
    </UBreadcrumb>
</template>
<script setup>
const route = useRoute()
const routeStore = useRouteStore()

const breadcrumb = computed(() => {
    // 先根据name和params拼接路由名称
    const routes = route.matched.reduce((total, item) => {
        total.push(item.name.split('-').map(item => {
            return route.params[item]
        }).join('__'))
        return total
    }, [])

    // 再根据路由找到路由配置信息
    const routeInfos = routes.map((item) => {
        return routeStore.routes.find(i => i.route === item)
    })

    // 最后整理成组件需要的格式
    return routeInfos.map((item) => {
        return {
            label: item?.label || '',
            icon: item?.icon || null
            // to: item.path
        }
    })
})
</script>
