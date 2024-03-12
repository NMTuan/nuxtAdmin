<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-11 16:38:23
 * @LastEditTime: 2024-03-12 09:35:42
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\page\dataTable\search.vue
-->
<template>
    <div class="flex">
        <ComForm :fields="fields" v-model="q" :with-label="true" horizontal :submit="submit"></ComForm>
        <UButtonGroup orientation="horizontal" class="ml-2">
            <UButton @click="submit">搜索</UButton>
            <UDropdown :items="items" :popper="{ placement: 'bottom-end', arrow: true }" :ui="{ width: 'w-auto' }">
                <UButton icon="i-heroicons-chevron-down-20-solid" class="border-l" />
            </UDropdown>
        </UButtonGroup>
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
    }
})
const emits = defineEmits(['update:modelValue'])
const q = ref({})
const oriQ = JSON.parse(JSON.stringify(props.modelValue))

const submit = () => {
    const newQ = JSON.parse(JSON.stringify(props.modelValue))
    props.fields.forEach(item => {
        // 注意，这里===空时，也需要刷新
        if (q.value[item.key] !== undefined) {
            newQ[item.key] = q.value[item.key]
        }
    })
    emits('update:modelValue', newQ)
}

const reset = () => {
    q.value = {}
    emits('update:modelValue', oriQ)
}


const items = [
    [
        { label: '高级搜索' },
        {
            label: '重置搜索', click: reset
        }
    ]
]
</script>
