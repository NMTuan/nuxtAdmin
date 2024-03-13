<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:31:12
 * @LastEditTime: 2024-03-13 16:40:31
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\action\form.vue
-->

<template>
    <ActionCard :label="actionInfo.label" :close="actionBack">
        <ComForm ref="form" v-model="submitData" :fields="fields" :schema="schema" :submit="handlerSubmit"
            :loading="pending">
        </ComForm>
        <p v-for="i in 100">{{ i }}</p>
        <template #footer>
            <div class="flex justify-end">
                <UButton variant="ghost" class="mr-4" @click="actionBack">
                    {{ actionInfo.btns.cancel || 'cancel' }}
                </UButton>
                <UButton :loading="loading" @click="submit">
                    {{ actionInfo.btns.submit || 'submit' }}
                </UButton>
            </div>
        </template>
    </ActionCard>
</template>

<script setup>
import { z } from 'zod'

const pageRefresh = inject('pageRefresh')
const actionInfo = inject('actionInfo')
const actionFetch = inject('actionFetch')
const actionPost = inject('actionPost')
const actionBack = inject('actionBack')

const form = ref()  // el
const submitData = ref({})  // 要提交的数据
const toast = useToast()
const loading = ref(false)

const { data, pending } = await actionFetch()

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
    if (!data.value?.data?.fields) return []

    const rule = data.value.data.fields.reduce((total, field) => {
        if (field.valid) {
            field.valids = Object.keys(field.valid).reduce((total, key) => {
                total.push({
                    key,
                    message: field.valid[key]
                })
                return total
            }, [])
        }

        if (field.valids) {
            let shape = z.string()
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
            total[field.key] = shape
        }

        return total
    }, {})

    return z.object(rule)
})

// 提交按钮,触发表单提交
const submit = () => {
    // console.log('schema', schema.value)
    form.value.submit()
}

// 表单提交
const handlerSubmit = async ({ data }) => {
    // console.log('handlerSubmit')
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
        actionBack()
    }
}

// 监听异步加载的数据，拿到数据后赋值给表单
watch(formData, (vals) => {
    Object.keys(vals).map((key) => {
        submitData.value[key] = vals[key]
    })
})

</script>
