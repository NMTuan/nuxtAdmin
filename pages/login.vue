<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-08 16:56:10
 * @LastEditTime: 2024-02-29 13:45:08
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
        <p>token: {{ userStore.token }}</p>
        <pre>{{ results }}</pre>
    </div>
</template>

<script setup>
const userStore = useUserStore()

const username = ref('test')
const password = ref('test1234')
const results = ref({})
const submit = () => {
    $fetch('/api/auth/login', {
        method: 'POST',
        body: {
            username: username.value,
            password: password.value
        }
    }).then((res) => {
        if (res.code === 200 && res.data.token) {
            userStore.token = res.data.token
        }
        results.value = res
        navigateTo('/index')
    })
}
</script>
