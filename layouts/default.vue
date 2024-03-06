<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-08 16:57:23
 * @LastEditTime: 2024-02-29 09:02:01
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\layouts\default.vue
-->
<template>
    <div>
        <div>
            <ULink v-for="route in userStore.routes" :to="route.path" class="mx-4">
                [{{ route.name }}]
            </ULink>
        </div>
        <slot></slot>
    </div>
</template>
<script setup>
const userStore = useUserStore()
</script>
