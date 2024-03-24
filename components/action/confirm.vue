<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-07 19:23:22
 * @LastEditTime: 2024-03-24 17:23:33
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\action\confirm.vue
-->

<template>
    <ComCard :label="actionInfo.title || actionInfo.label" :close="actionBack">
        {{ actionInfo.message }}
        <template #footer>
            <div class="flex justify-end">
                <UButton variant="ghost" color="gray" class="mr-4" @click="actionBack">
                    {{ actionInfo.btns?.cancel || $t('action.confirm.cancel') }}
                </UButton>
                <UButton :loading="loading" :color="actionInfo.color || 'primary'" @click="submit">
                    {{ actionInfo.btns?.submit || $t('action.confirm.submit') }}
                </UButton>
            </div>
        </template>
    </ComCard>
</template>

<script setup>
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
        actionBack()
    }
}
</script>
