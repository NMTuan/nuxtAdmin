<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-07 19:23:22
 * @LastEditTime: 2024-03-11 16:32:59
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\action\confirm.vue
-->

<template>
    <ActionCard :label="actionInfo.label" :close="actionBack">
        confirm

        <template #footer>
            <div class="flex justify-end">
                <UButton variant="ghost" class="mr-4" @click="actionBack">
                    {{ actionInfo.btns?.cancel || 'cancel' }}
                </UButton>
                <UButton :loading="loading" @click="submit">
                    {{ actionInfo.btns?.submit || 'submit' }}
                </UButton>
            </div>
        </template>
    </ActionCard>
</template>

<script setup>
const route = useRoute()

const pageRefresh = inject('pageRefresh')
const actionInfo = inject('actionInfo')
const actionBack = inject('actionBack')
const actionPost = inject('actionPost')

const toast = useToast()
const loading = ref(false)

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
