<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:31:12
 * @LastEditTime: 2024-03-07 20:17:20
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\action\form.vue
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

        <div v-if="pending">

            <template v-for="i in 3">
                <USkeleton class="h-4 w-16 mb-2" />
                <USkeleton class="h-8 mb-4" />
            </template>
        </div>
        <UForm v-else ref="form" :state="submitData" :schema="schema" @submit="handlerSubmit">
            <!-- 后端没有配置表单数据，则循环所有字段直接渲染 -->
            <UFormGroup v-if="fields.length === 0" v-for="(val, key) in formData" :name="key" :label="key" class="mb-4">
                <UInput :disabled="Object.keys(route.query).includes(key)" v-model="submitData[key]" />
            </UFormGroup>
            <!-- 根据后端返回的表单数据渲染 -->
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
import { z } from 'zod'

const route = useRoute()

const pageRefresh = inject('pageRefresh')
const actionInfo = inject('actionInfo')
const actionFetch = inject('actionFetch')
const actionPost = inject('actionPost')
const actionBack = inject('actionBack')

const form = ref()  // el
const submitData = ref({})  // 要提交的数据
const toast = useToast()
const loading = ref(false)

const { data, pending } = await actionFetch(route.query)

// 表单数据
const formData = computed(() => {
    return data.value?.data.data || []
})

// 表单配置
const fields = computed(() => {
    return data.value?.data.fields || []
})

// 表单验证
const schema = computed(() => {
    const rule = data.value?.data.fields.reduce((total, field) => {
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
    actionBack()
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

    loading.value = true
    const res = await actionPost(data)
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

// 监听异步加载的数据，拿到数据后赋值给表单
watchEffect(() => {
    Object.keys(formData.value).map((key) => {
        submitData.value[key] = formData.value[key]
    })
})

</script>
