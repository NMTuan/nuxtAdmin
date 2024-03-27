<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-08 16:56:10
 * @LastEditTime: 2024-03-14 13:49:26
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\pages\logout.vue
-->
<template>
    <div></div>
</template>
<script setup>
const { signOut } = useAuth()
signOut({
    callbackUrl: '/login'
})
</script>
