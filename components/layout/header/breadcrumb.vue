<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-13 16:56:03
 * @LastEditTime: 2024-05-13 14:05:32
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\header\breadcrumb.vue
-->
<template>
    <UBreadcrumb :links="breadcrumb" divider=" / "> </UBreadcrumb>
</template>
<script setup>
const route = useRoute()
const routeStore = useRouteStore()

const breadcrumb = computed(() => {
    let routes = []
    // 手工创建的路由文件，注意：二级路由需要同时手工创建一级路由，否则 面包屑导航 层级显示不正确。
    if (Object.keys(route.params).length === 0) {
        routes = route.matched.reduce((total, item) => {
            total.push(
                item.name
                    .split('-')
                    .map((item) => {
                        return item.split('___')[0]
                    })
                    .join('__')
            )
            return total
        }, [])
    }
    // 动态路由，先根据name和params拼接路由名称
    else {
        routes = route.matched.reduce((total, item) => {
            total.push(
                item.name
                    .split('-')
                    .map((item) => {
                        return route.params[item.split('___')[0]]
                    })
                    .join('__')
            )
            return total
        }, [])
    }

    // 再根据路由找到路由配置信息
    const routeInfos = routes.map((item) => {
        return routeStore.routes.find((i) => i.route === item)
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
