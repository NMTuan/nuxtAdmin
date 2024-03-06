
<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-04 16:29:19
 * @LastEditTime: 2024-03-04 17:12:23
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\page\dataTable\link.vue
-->

<template>
    <ULink :to="{
        path: column.to,
        query
    }" v-bind="column.props">
        {{ value }}
    </ULink>
</template>
<script setup>
const row = inject('row')
const column = inject('column')
const value = inject('value')

// 构建参数
const query = computed(() => {
    // 如果有配置query，则从row中提取数据
    if (Array.isArray(column.query)) {
        return column.query.reduce((total, item, index) => {
            total[item] = row[item]
            return total
        }, {})
    }
    // 否则直接拿当前key和value传参
    else {
        return {
            [column.key]: row[column.key]
        }
    }

})

</script>
