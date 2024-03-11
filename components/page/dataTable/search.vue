<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-11 16:38:23
 * @LastEditTime: 2024-03-11 17:04:31
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\page\dataTable\search.vue
-->
<template>
    <div class="flex">
        {{ modelValue }}
        {{ q[field.key] }}
        <ComForm :fields="[field]" v-model="modelValue[field.key]" :with-label="false"></ComForm>
        <!-- <UInput placeholder="搜索" clearable class="w-40" /> -->
        <UButtonGroup orientation="horizontal" class="ml-2">
            <UButton>搜索</UButton>
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
// q.value[props.field.key] = ''
// watchEffect(() => {
//     emits('update:modelValue', q.value[props.field.key])
// })


const items = [
    [
        { label: '高级搜索' },
        { label: '重置搜索' }
    ]
]
</script>
