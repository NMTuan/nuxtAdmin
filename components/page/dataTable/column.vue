<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-04 16:29:57
 * @LastEditTime: 2024-03-18 14:03:11
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\page\dataTable\column.vue
-->


<template>
    <div>
        <template v-if="component === 'enum'">
            {{ column.items.find(item => item.key === value)?.label || value }}
        </template>
        <template v-if="component === 'detail'">
            <UButton @click="handlerClick" variant="link">{{ value }}</UButton>
            <Action v-model="action" :row="row" />
        </template>
    </div>
</template>

<script setup>
const props = defineProps({
    component: {
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
    },
    value: {
        type: String,
        default: ''
    }
})

const action = ref({})
const handlerClick = () => {
    action.value = props.column
}

</script>
