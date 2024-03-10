<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-08 21:51:51
 * @LastEditTime: 2024-03-10 09:19:07
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\header.vue
-->
<template>
    <div class="flex items-center justify-between px-8 h-full">
        <div>
            left
        </div>
        <div class="flex items-center">
            <template v-for="(item) in topbar">
                <LayoutHeaderDarkMode v-if="item === 'darkMode'" />
                <LayoutHeaderFullScreen v-else-if="item === 'fullScreen'" />
                <LayoutHeaderUser v-else-if="item === 'user'" />
                <UButton v-else-if="item?.icon" color="zinc" square variant="soft" :icon="item.icon" size="lg"
                    class="mr-2" />
            </template>
        </div>
    </div>
</template>
<script setup>
const { data } = useAuth()
const topbar = computed(() => {
    return data.value.topbar
})
</script>
