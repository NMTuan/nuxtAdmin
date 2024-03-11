<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-11 16:38:23
 * @LastEditTime: 2024-03-11 20:52:37
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\page\dataTable\search.vue
-->
<template>
    <div class="flex">
        <ComForm :fields="[field]" v-model="q" :with-label="false" :submit="submit"></ComForm>
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
    field: {
        type: Object,
        default: () => { }
    }
})
const emits = defineEmits(['update:modelValue'])
const q = ref({})
const oriQ = JSON.parse(JSON.stringify(props.modelValue))

const submit = () => {
    const newQ = JSON.parse(JSON.stringify(props.modelValue))
    newQ[props.field.key] = q.value[props.field.key]

    // if (JSON.stringify(newQ) !== JSON.stringify(props.modelValue)) {
    emits('update:modelValue', newQ)
    // }
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
