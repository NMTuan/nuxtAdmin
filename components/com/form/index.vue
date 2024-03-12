<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-11 13:37:09
 * @LastEditTime: 2024-03-12 16:13:09
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\com\form\index.vue

 TODO 有fileds，可以考虑把表单验证放在这里
-->
<template>
    <template v-if="loading" v-for="i in (fields.length || 3)">
        <USkeleton v-if="withLabel" class="h-4 w-16 mb-2" />
        <USkeleton class="h-8 mb-4" />
    </template>
    <UForm v-else ref="form" :state="formData" :schema="schema" @submit="submit"
        :class="horizontal && 'form--horizontal'">
        <UFormGroup v-if="fields.length === 0" v-for="(label, key) in formData" :name="key"
            :label="withLabel ? key : ''" :ui="groupUI" :class="[!horizontal && 'mb-4']">
            <ComFormItem :field="{ key, label }" />
        </UFormGroup>
        <UFormGroup v-else v-for="field in fields" :name="field.key" :label="withLabel ? field.label : ''" :ui="groupUI"
            :class="[!horizontal && 'mb-4']">
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
    horizontal: {
        type: Boolean,
        default: false
    },
    submit: {
        type: Function,
        default: () => { }
    },
    loading: {
        type: Boolean,
        default: false
    }
})
const emits = defineEmits(['update:modelValue'])

const form = ref()
// 表单数据
const formData = ref({})
provide('formData', formData)

const groupUI = computed(() => {
    if (!props.horizontal) {
        return {}
    }
    return {
        wrapper: 'flex items-center mr-4',
        container: 'mt-0',
        label: {
            wrapper: 'mr-2'
        }
    }
})

// 监听组件外的变动. 更新到组件内
watchEffect(() => {
    formData.value = Object.assign({}, props.modelValue)
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
<style lang="scss" scoped>
.form {
    &--horizontal {
        @apply flex items-center;
    }
}
</style>
