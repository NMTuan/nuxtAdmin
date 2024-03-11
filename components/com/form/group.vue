<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-11 15:54:59
 * @LastEditTime: 2024-03-11 16:28:43
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\com\form\Group.vue

 暂时用不到
-->
<template>
    <UFormGroup :name="field.key" :label="withLabel ? field.label : ''">
        <ComFormSelect v-if="field.type === 'select'" />
        <ComFormInput v-else />
    </UFormGroup>
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
    },
    withLabel: {
        type: Boolean,
        default: true
    }
})

provide('formData', props.modelValue)
provide('field', props.field)

</script>
