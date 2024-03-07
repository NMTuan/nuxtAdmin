<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:31:12
 * @LastEditTime: 2024-03-07 11:08:31
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

            <UForm ref="form" :state="submitData" :schema="schema" @submit="handlerSubmit">
                <UFormGroup v-if="fields.length === 0" v-for="(val, key) in formData" :name="key" :label="key"
                    class="mb-4">
                    <UInput :disabled="Object.keys(route.query).includes(key)" v-model="submitData[key]" />
                </UFormGroup>
                <UFormGroup v-else v-for="field in fields" :name="field.key" :label="field.label" class="mb-4"
                    :required="Object.keys(field.valid || {}).length > 0 || field.valids?.length > 0">
                    <USelectMenu v-if="field.type === 'select'" :options="field.options" value-attribute="value"
                        :multiple="field.multiple" v-model="submitData[field.key]"
                        :disabled="field.disabled !== undefined ? field.disabled : Object.keys(route.query).includes(field.key)">
                    </USelectMenu>
                    <UInput v-else
                        :disabled="field.disabled !== undefined ? field.disabled : Object.keys(route.query).includes(field.key)"
                        v-model="submitData[field.key]" />
                </UFormGroup>
            </UForm>
            <!-- <div>{{ $route.params }}</div> -->
            <div>{{ $route.query }}</div>
            <!-- <div>{{ pageStore.actionConfig }}</div> -->
            <!-- <pre>submitData: {{ submitData }}</pre> -->
            <!-- <pre>fields: {{ schema.shape }}</pre> -->

            <template #footer>
                <div class="flex justify-end">
                    <UButton variant="ghost" class="mr-4" @click="handlerClose">cancel</UButton>
                    <UButton :loading="pending" @click="submit">submit</UButton>
                </div>
            </template>
        </UCard>
        <slot />
    </UModal>
</template>

<script setup>
import { z } from 'zod'

const route = useRoute()
const pageStore = usePageStore()
const apiStore = useApiStore()
const userStore = useUserStore()
const isOpen = ref(true)
const form = ref()
const submitData = ref({})
const toast = useToast()
const updateRow = inject('updateRow')
const pageInfo = inject('pageInfo')


// const { data, pending } = await pageStore.fetch('action', route.query)
const { data, peding } = await useFetch('/api' + pageInfo.value.path, {
    query: route.query
})
console.log('data', data)

const formData = computed(() => {
    return data.value.data.data
})
const fields = computed(() => {
    return data.value.data.fields || []
})

const schema = computed(() => {
    const rule = data.value.data.fields.reduce((total, field) => {
        let shape = z.string()
        if (field.valid) {
            Object.keys(field.valid).map((key) => {
                switch (key) {
                    case 'required': shape = shape.min(1, field.valid[key])
                        break
                    case 'min': shape = shape.min(field.valid[key])
                        break
                    case 'max': shape = shape.max(field.valid[key])
                        break
                    case 'email': shape = shape.email(field.valid[key])
                }
            })
        }

        if (field.valids) {
            field.valids.map((item) => {
                switch (item.key) {
                    case 'required': shape = shape.min(1, item.message)
                        break
                    case 'min': shape = shape.min(item.value, item.message)
                        break
                    case 'max': shape = shape.max(item.value, item.message)
                        break
                    case 'email': shape = shape.email(item.message)
                        break
                }
            })
        }
        total[field.key] = shape

        return total
    }, {})

    return z.object(rule)
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
    console.log('schema', schema.value)
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
        updateRow(route.query, res.data.data)
        handlerClose()
    }
}

resetForm()


</script>
