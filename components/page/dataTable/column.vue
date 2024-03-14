<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-04 16:29:57
 * @LastEditTime: 2024-03-14 12:09:48
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\page\dataTable\column.vue
-->


<template>
    <PageDataTableLink v-if="column?.component === 'link'" :row="row" :column="column" :value="value" />
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

</script>
