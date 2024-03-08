<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-08 16:56:10
 * @LastEditTime: 2024-03-08 17:04:19
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\pages\login.vue
-->

<template>
    <ClientOnly>
        <UtilBackgroundImage class="flex flex-col items-center justify-between w-screen h-screen overflow-hidden">
            <UtilColorMode></UtilColorMode>
            <div>
                <div class="text-center mb-6">
                    <h1 class="text-3xl font-bold">Nuxt Admin</h1>
                    <p>Admin template with zero front-end development</p>
                </div>
                <div class="w-[420px] p-8 border rounded bg-white shadow y">
                    <div class="mb-6 text-center text-primary font-bold"> Welcome Back !</div>
                    <div class="">登录管理平台</div>
                    <UFormGroup size="lg" label="Username" class="mb-6">
                        <UInput v-model="username"></UInput>
                    </UFormGroup>
                    <UFormGroup size="lg" label="Password" class="mb-4">
                        <UInput v-model="password" type="password"></UInput>
                    </UFormGroup>
                    <UFormGroup size="lg">
                        <UCheckbox label="Remember me"></UCheckbox>
                    </UFormGroup>
                    <UFormGroup size="lg" class="mt-8">
                        <UButton @click="submit" block size="lg">Login</UButton>
                    </UFormGroup>
                </div>
            </div>

            <div class="bg-red-100">
                123
            </div>
        </UtilBackgroundImage>
    </ClientOnly>
</template>

<script setup>
const color = useColor()

const { signIn } = useAuth()
const username = ref('test')
const password = ref('test1234')
// const config = useRuntimeConfig()
const submit = async () => {
    await signIn({
        username: username.value,
        password: password.value
    }, { callbackUrl: '/index' })

}
</script>
