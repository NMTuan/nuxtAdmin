<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-08 16:56:10
 * @LastEditTime: 2024-03-15 14:25:55
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\pages\login.vue
-->

<template>
    <ClientOnly>
        <div class="flex flex-col items-center justify-between w-screen h-screen overflow-hidden" :style="handlerStyle">
            <div></div>
            <div>
                <div class="text-center mb-6">
                    <h1 class="text-4xl font-bold">{{ $t('siteName') }}</h1>
                    <p class="mt-4 mb-12 opacity-50">{{ $t('slogan') }}</p>
                </div>
                <div class="relative">
                    <div
                        class="w-[520px] px-10 py-14 border rounded bg-white shadow y relative z-10 dark:bg-gray-900 dark:border-gray-800">
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
                            <UButton @click="submit" block size="xl" :loading="loading">Login</UButton>
                        </UFormGroup>
                    </div>
                    <div
                        class="absolute inset-0 w-full h-full p-8 border rounded bg-white opacity-75 shadow y -rotate-3 dark:bg-gray-900 dark:border-gray-700">
                    </div>
                </div>
            </div>

            <div class="pb-4">
                <ULink class="opacity-25 hover:opacity-100" to="https://github.com/NMTuan/nuxtAdmin" target="_blank">
                    <UIcon name="i-ri-github-fill" size="24" />
                </ULink>
            </div>
        </div>
    </ClientOnly>
</template>

<script setup>
definePageMeta({
    layout: 'page',
    auth: false
})
const { signIn } = useAuth()
const color = useColor()
const colorMode = useColorMode()

const loading = ref(false)
const username = ref('test')
const password = ref('test1234')

const handlerStyle = computed(() => {
    return {
        'background-image': `linear-gradient(to bottom, ${handlerColor('white')},${handlerColor('white')},${handlerColor(100, 'gray')}, ${handlerColor(200)})`
    }
})

const handlerColor = (shades, c) => {
    if (colorMode.value !== 'dark') {
        return color(shades, c)
    } else {
        // dark 模式下翻转一下颜色和色调
        if (shades === 'white') {
            return color('black')
        } else if (shades === 'black') {
            return color('white')
        } else {
            return color(1000 - shades, c)
        }
    }
}

const submit = async () => {
    loading.value = true
    await signIn({
        username: username.value,
        password: password.value
    }, { callbackUrl: '/index' })
}
</script>
