<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-11 13:37:09
 * @LastEditTime: 2024-03-11 20:39:46
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\com\form\index.vue

 TODO 有fileds，可以考虑把表单验证放在这里
-->
<template>
    <UForm ref="form" :state="formData" :schema="schema" @submit="submit">
        <UFormGroup v-for="field in fields" :name="field.key" :label="withLabel ? field.label : ''">
            <ComFormItem :field="field" />
        </UFormGroup>
    </UForm>
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
    schema: {
        type: Object,
        default: () => { }
    },
    withLabel: {
        type: Boolean,
        default: true
    },
    submit: {
        type: Function,
        default: () => { }
    }
})
const emits = defineEmits(['update:modelValue'])

const form = ref()
// 表单数据
const formData = ref({})
provide('formData', formData)

// 监听组件外的变动. 更新到组件内
watchEffect(() => {
    if (Object.keys(props.modelValue).length === 0) {
        formData.value = {}
    } else {
        formData.value = Object.assign(formData.value, props.modelValue)
    }
})

// 监听组件内的变动. 更新到组件外
watchEffect(() => {
    if (JSON.stringify(props.modelValue) !== JSON.stringify(formData.value)) {
        emits('update:modelValue', formData.value)
    }
})

defineExpose({
    submit: () => {
        form.value.submit()
    }
})
</script>
