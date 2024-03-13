<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-11 16:38:23
 * @LastEditTime: 2024-03-13 14:40:14
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\page\dataTable\search.vue
-->
<template>
    <div class="flex">
        <!-- 搜索 -->
        <ComForm :fields="fields" v-model="q" horizontal :submit="submit"></ComForm>
        <!-- 按钮 -->
        <UButtonGroup orientation="horizontal" class="ml-2">
            <UButton @click="submit">搜索</UButton>
            <UDropdown :items="items" :popper="{ placement: 'bottom-end', arrow: true }" :ui="{ width: 'w-auto' }">
                <UButton icon="i-heroicons-chevron-down-20-solid" class="border-l" />
            </UDropdown>
        </UButtonGroup>
        <!-- 高级搜索 -->
        <USlideover :model-value="isOpen" @close="handlerClose">
            <UCard>
                <template #header>
                    <div class="flex items-center justify-between">
                        <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                            高级搜索
                        </h3>
                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                            @click="handlerClose" />
                    </div>
                </template>

                <ComForm :fields="advFields" v-model="q" :submit="submit"></ComForm>

                <template #footer>
                    <div class="flex justify-between">
                        <UButton variant="ghost" class="mr-4" @click="reset">
                            {{ 'reset' }}
                        </UButton>
                        <div class="flex items-center">
                            <UButton variant="ghost" class="mr-4" @click="handlerClose">
                                {{ 'cancel' }}
                            </UButton>
                            <UButton @click="submit">
                                {{ 'submit' }}
                            </UButton>
                        </div>
                    </div>
                </template>
            </UCard>
        </USlideover>
    </div>
</template>
<script setup>
const props = defineProps({
    modelValue: {
        type: Object,
        default: () => { }
    },
    fields: {
        type: Array,
        default: () => []
    },
    advFields: {
        type: Array,
        default: () => []
    }
})
const emits = defineEmits(['update:modelValue'])

const q = ref({})   // 查询项
const oriQ = JSON.stringify(props.modelValue)  // 原始表单值
const isOpen = ref(false)

const submit = () => {
    handlerClose()
    const newQ = JSON.parse(JSON.stringify(props.modelValue))
    props.fields.forEach(item => {
        // 注意，这里===空时，也需要刷新
        if (q.value[item.key] !== undefined) {
            newQ[item.key] = q.value[item.key]
        }
    })
    props.advFields.forEach(item => {
        // 注意，这里===空时，也需要刷新
        if (q.value[item.key] !== undefined) {
            newQ[item.key] = q.value[item.key]
        }
    })
    emits('update:modelValue', JSON.parse(JSON.stringify(newQ)))
}

const reset = () => {
    handlerClose()
    q.value = {}
    emits('update:modelValue', JSON.parse(oriQ))
}

const handlerClose = () => {
    isOpen.value = false
}

const items = [
    [
        { label: '高级搜索', click: () => isOpen.value = true },
        {
            label: '重置搜索', click: () => {
                reset()
            }
        }
    ]
]

// 监听组件外的变动. 更新到组件内
watchEffect(() => {
    q.value = JSON.parse(JSON.stringify(props.modelValue))
})


</script>
