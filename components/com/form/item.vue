<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-13 08:30:52
 * @LastEditTime: 2024-03-25 15:38:42
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\com\form\item.vue
-->
<template>
    <ComFormSelect v-if="field.component === 'select'" />
    <ComFormDate v-else-if="field.component === 'date'" />
    <ComFormDateRange v-else-if="field.component === 'dateRange'" />
    <ComFormInput v-else />
</template>
<script setup>
const props = defineProps({
    field: {
        type: Object,
        default: () => { }
    }
})
provide('field', props.field)
</script>
