<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-07 19:23:22
 * @LastEditTime: 2024-03-07 20:30:14
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\action\confirm.vue
-->

<template>
    <UCard>
        <template #header>
            <div class="flex items-center justify-between">
                <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                    {{ actionInfo.label }}
                </h3>
                <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                    @click="handlerClose" />
            </div>
        </template>

        confirm

        <template #footer>
            <div class="flex justify-end">
                <UButton variant="ghost" class="mr-4" @click="handlerClose">
                    {{ actionInfo?.btns.cancel || 'cancel' }}
                </UButton>
                <UButton :loading="loading" @click="submit">
                    {{ actionInfo?.btns.submit || 'submit' }}
                </UButton>
            </div>
        </template>
    </UCard>
</template>

<script setup>
const route = useRoute()

const pageRefresh = inject('pageRefresh')
const actionInfo = inject('actionInfo')
const actionBack = inject('actionBack')
const actionPost = inject('actionPost')

const toast = useToast()
const loading = ref(false)

const handlerClose = () => {
    actionBack()
}

// 提交按钮,触发表单提交
const submit = async () => {
    loading.value = true
    const res = await actionPost()
    loading.value = false
    if (res.code === 200) {
        toast.add({
            icon: 'i-heroicons-check-circle',
            color: 'green',
            title: res.message || 'success !'
        })
        pageRefresh()
        handlerClose()
    }
}



</script>
