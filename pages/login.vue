<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-08 16:56:10
 * @LastEditTime: 2024-03-22 17:12:17
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
                        <UForm ref="form" :state="formData" @submit="onSubmit">
                            <UFormGroup size="xl" :label="$t('login.username')" class="mb-6">
                                <UInput v-model="formData.username" autocomplete="off"></UInput>
                            </UFormGroup>
                            <UFormGroup size="xl" :label="$t('login.password')" class="mb-4">
                                <UInput v-model="formData.password" type="password" autocomplete="off"></UInput>
                            </UFormGroup>
                            <UFormGroup size="xl">
                                <UCheckbox v-model="formData.keep_login" :label="$t('login.rememberMe')"
                                    autocomplete="off">
                                </UCheckbox>
                            </UFormGroup>
                            <UFormGroup size="xl" class="mt-8">
                                <UButton @click="submit" block size="xl" :loading="loading">{{ $t('login.login') }}
                                </UButton>
                            </UFormGroup>
                        </UForm>
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
const form = ref()
const formData = ref({
    username: '',
    password: '',
    keep_login: false
})

const submit = async () => {
    form.value.submit()
}

const onSubmit = async () => {
    loading.value = true
    await signIn(formData.value, { callbackUrl: '/index' })
}

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

const handlerStyle = computed(() => {
    return {
        'background-image': `linear-gradient(to bottom, ${handlerColor('white')},${handlerColor('white')},${handlerColor(100, 'gray')}, ${handlerColor(200)})`
    }
})

</script>
