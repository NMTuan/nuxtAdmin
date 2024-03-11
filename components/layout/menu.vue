<template>
    <simplebar class="h-full">
        <LayoutMenuList :children="menus" />
        <!-- <pre>{{ menus }}</pre> -->
        <!-- <div v-for="i in 50">{{ i }}</div> -->
    </simplebar>
</template>

<script setup>
import simplebar from 'simplebar-vue';

const { data } = useAuth()

const handlerMenu = (menu, parent) => {
    // 给menu增加path属性，用于跳转
    return menu.map(item => {
        if (item.children) {
            handlerMenu(item.children, item)
        } else {
            delete item.actions
            item.path = parent ? `/${parent.value}/${item.value}` : `/${item.value}`
        }
        return item
    })
}
const menus = computed(() => {
    const menu = JSON.parse(JSON.stringify(data.value.menu))
    return handlerMenu(menu, null)
})
</script>
