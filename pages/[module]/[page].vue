<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:18:04
 * @LastEditTime: 2024-02-29 12:22:24
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\pages\[module]\[page].vue
-->
<template>
    <div>
        page
        <p>params: {{ $route.params }}</p>
        <p>config: {{ pageStore.pageConfig }}</p>
        <hr>
        <LayoutPageDataTable v-if="pageStore.pageConfig.layout === 'dataTable'"></LayoutPageDataTable>
        <LayoutPageView v-if="pageStore.pageConfig.layout === 'view'"></LayoutPageView>
        <p>res: {{ res }}</p>

    </div>
</template>
<script setup>
const pageStore = usePageStore()

const res = ref({})
// pageStore.fetch()
//     // $fetch(`/api${pageStore.pageConfig.path}`)
//     .then((response) => {
//         console.log(response)
//         res.value = response
//     })

</script>
