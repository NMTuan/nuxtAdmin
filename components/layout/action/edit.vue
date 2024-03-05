<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:31:12
 * @LastEditTime: 2024-03-05 14:57:23
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\action\edit.vue
-->

<template>
    <UModal :model-value="isOpen" @close="handlerClose" prevent-close>
        <UCard>
            <template #header>
                <div class="flex items-center justify-between">
                    <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                        {{ pageStore.actionConfig.label }}
                    </h3>
                    <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                        @click="handlerClose" />
                </div>
            </template>

            <UForm ref="form" :state="submitData" @submit="handlerSubmit">
                <UFormGroup v-for="(val, key) in formData" :name="key" :label="key" class="mb-4">
                    <UInput :disabled="Object.keys(route.query).includes(key)" v-model="submitData[key]" />
                </UFormGroup>
            </UForm>
            <!-- <div>{{ $route.params }}</div> -->
            <!-- <div>{{ $route.query }}</div> -->
            <!-- <div>{{ pageStore.actionConfig }}</div> -->
            <pre>submitData: {{ submitData }}</pre>
            <pre>columns: {{ columns }}</pre>

            <template #footer>
                <div class="flex justify-end">
                    <UButton variant="ghost" class="mr-4" @click="handlerClose">cancel</UButton>
                    <UButton :loading="pending" @click="submit">submit</UButton>
                </div>
            </template>
        </UCard>

    </UModal>
</template>

<script setup>
const route = useRoute()
const pageStore = usePageStore()
const apiStore = useApiStore()
const userStore = useUserStore()
const isOpen = ref(true)
const form = ref()
const submitData = ref({})
const toast = useToast()

const { data, pending } = await pageStore.fetch('action', route.query)

const formData = computed(() => {
    return data.value.data.data
})
const columns = computed(() => {
    return data.value.data.columns
})

const handlerClose = () => {
    pageStore.goBack()
}

// 重置表单数据
const resetForm = () => {
    Object.keys(formData.value).map((key) => {
        submitData.value[key] = formData.value[key]
    })
}

// 提交按钮,触发表单提交
const submit = () => {
    form.value.submit()
}

// 表单提交
const handlerSubmit = async ({ data }) => {
    // 克隆一份，把query中的参数过滤掉，不提交
    // const d = JSON.parse(JSON.stringify(data))
    // Object.keys(route.query).map((key) => {
    //     delete d[key]
    // })
    pending.value = true
    const res = await $fetch(apiStore.url + pageStore.actionConfig.path, {
        method: 'POST',
        query: route.query,
        body: data,
        headers: {
            Authorization: 'Bearer ' + userStore.token
        }
    })
    pending.value = false
    if (res.code === 200) {
        toast.add({
            icon: 'i-heroicons-check-circle',
            color: 'green',
            title: res.message || 'success !'
        })
        handlerClose()
    }
}

resetForm()


</script>
