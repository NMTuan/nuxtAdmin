<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-08 16:56:10
 * @LastEditTime: 2024-03-06 16:49:57
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\pages\login.vue
-->

<template>
    <div>
        <h1>login page</h1>
        <UFormGroup label="username">
            <UInput v-model="username"></UInput>
        </UFormGroup>
        <UFormGroup label="password">
            <UInput v-model="password" type="password"></UInput>
        </UFormGroup>
        <UFormGroup>
            <UButton @click="submit">login</UButton>
        </UFormGroup>
    </div>
</template>

<script setup>
const { signIn } = useAuth()
const username = ref('test')
const password = ref('test1234')
const submit = async () => {
    await signIn({
        username: username.value,
        password: password.value
    }, { callbackUrl: '/index' })

}
</script>
