<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-08 16:56:10
 * @LastEditTime: 2024-03-09 11:38:26
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\pages\login.vue
-->

<template>
    <ClientOnly>
        <UtilBackgroundImage class="flex flex-col items-center justify-between w-screen h-screen overflow-hidden">
            <div></div>
            <div>
                <UtilColorMode></UtilColorMode>
                <div class="text-center mb-6">
                    <h1 class="text-4xl font-bold">Nuxt Admin</h1>
                    <p class="mt-4 mb-12 opacity-50">Admin template with zero front-end development</p>
                </div>
                <div class="relative">
                    <div
                        class="w-[520px] px-10 py-14 border rounded bg-white shadow y relative z-10 dark:bg-primary-900 dark:border-primary-700">
                        <!-- <div class="mb-6 text-center text-primary font-bold"> Welcome Back !</div> -->
                        <UFormGroup size="xl" label="Username" class="mb-6">
                            <UInput v-model="username"></UInput>
                        </UFormGroup>
                        <UFormGroup size="xl" label="Password" class="mb-4">
                            <UInput v-model="password" type="password"></UInput>
                        </UFormGroup>
                        <UFormGroup size="xl">
                            <UCheckbox label="Remember me"></UCheckbox>
                        </UFormGroup>
                        <UFormGroup size="xl" class="mt-8">
                            <UButton @click="submit" block size="xl">Login</UButton>
                        </UFormGroup>
                    </div>
                    <div
                        class="absolute inset-0 w-full h-full p-8 border rounded bg-white opacity-75 shadow y -rotate-3 dark:bg-primary-900 dark:border-primary-700">
                    </div>
                </div>
            </div>

            <div class="pb-4">
                <ULink class="opacity-25 hover:opacity-100" to="https://github.com/NMTuan/nuxtAdmin" target="_blank">
                    <UIcon name="i-ri-github-fill" size="24" />
                </ULink>
            </div>
        </UtilBackgroundImage>
    </ClientOnly>
</template>

<script setup>
definePageMeta({
    layout: 'page'
})
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
