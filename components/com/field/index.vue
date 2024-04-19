<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-27 15:50:04
 * @LastEditTime: 2024-04-19 09:32:09
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\com\field\index.vue
-->
<template>
    <ComFieldEnum v-if="component === 'enum'" />
    <ComFieldCopy v-else-if="component === 'copy'" />
    <template v-if="component === 'detail'">
        <UButton @click="handlerClick" variant="link">{{ value }}</UButton>
        <Action v-model="action" :row="row" />
    </template>
</template>
<script setup>
const props = defineProps({
    component: {
        type: String,
        default: ''
    },
    value: {
        type: String,
        default: ''
    },
    row: {
        type: Object,
        default: () => { }
    },
    column: {
        type: Object,
        default: () => { }
    }
})

const action = ref({})
const handlerClick = () => {
    action.value = props.column
}

provide('value', props.value)
provide('column', props.column)

</script>
