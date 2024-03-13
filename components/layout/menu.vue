<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-11 11:27:44
 * @LastEditTime: 2024-03-13 15:54:08
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\menu.vue
-->
<template>
    <simplebar class="h-full">
        <LayoutMenuList :children="menus" :level="1" />
        <!-- <pre>{{ menus }}</pre> -->
        <!-- <div v-for="i in 50">{{ i }}</div> -->
    </simplebar>
</template>

<script setup>
import simplebar from 'simplebar-vue';

const { data } = useAuth()

const handlerMenu = (menu, parentPath) => {
    // 给menu增加path属性，用于跳转
    // const path = `${parentPath ? ('/' + parentPath) : ''}/${item.value}`
    return menu.map(item => {
        let path = ''
        if (parentPath) {
            path += parentPath
        }
        path += `/${item.value}`
        if (item.children) {
            handlerMenu(item.children, path)
        }
        delete item.actions
        item.path = path
        return item
    })
}
const menus = computed(() => {
    const menu = JSON.parse(JSON.stringify(data.value.menu))
    return handlerMenu(menu, null)
})
</script>
