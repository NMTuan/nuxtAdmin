<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-13 08:30:52
 * @LastEditTime: 2024-03-18 14:26:48
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\com\form\item.vue
-->
<template>
    <ComFormSelect v-if="field.component === 'select'" />
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
