<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-06 20:23:30
 * @LastEditTime: 2024-03-07 11:21:10
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\pages\[...slug]\index.vue
-->

<template>
    <div>
        <div>{{ $route.params }}</div>
        <div>
            <ULink v-for="item in userStore.routes" :to="item.path" class="mx-4">[{{ item.name }}]</ULink>
        </div>
        <hr>
        <div>{{ $route.params }}</div>
        <hr>
        <X :slug="$route.params.slug"></X>
        <!-- <pre>{{ userStore.routes }}</pre> -->
    </div>
</template>

<script setup>
const userStore = useUser2Store()

const x = () => {
    console.log('x ->', '...slug page')
}
provide('x', x)
</script>
