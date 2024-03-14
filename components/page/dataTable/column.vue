<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-04 16:29:57
 * @LastEditTime: 2024-03-14 16:42:53
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\page\dataTable\column.vue
-->


<template>
    <div>
        <UButton @click="handlerClick" variant="link">{{ value }}</UButton>
        <Action v-model="action" :row="row" />
    </div>
</template>

<script setup>
const props = defineProps({
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
