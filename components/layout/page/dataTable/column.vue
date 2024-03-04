
import type { componentNames } from '#build/components';

import type { LayoutPageDataTableLink } from '#build/components';
<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-04 16:29:57
 * @LastEditTime: 2024-03-04 16:55:45
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\page\dataTable\column.vue
-->


<template>
    <LayoutPageDataTableLink v-if="column.component === 'link'"></LayoutPageDataTableLink>
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

provide('row', props.row)
provide('column', props.column)
provide('value', props.value)


</script>
