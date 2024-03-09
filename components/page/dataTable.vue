<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:30:33
 * @LastEditTime: 2024-03-08 22:10:02
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\page\dataTable.vue
-->

<template>
    <div>
        <!-- 功能操作 -->
        <div>
            <UButton v-for="item in pageActions.filter(action => action?.positions.includes('top'))" :to="item.path">
                {{ item.label }}
            </UButton>
        </div>
        <!-- 数据表格 -->
        <UTable v-if="columns" :rows="list" :columns="columns" :loading="pending" class="bg-lime-200">
            <template v-for="col in columns" #[`${col.key}-data`]="{ row }">
                <template v-if="col.key === 'actions'">
                    <UButton v-for="action in pageActions.filter(action => action?.positions.includes('row')) "
                        :to="handlerActionTo(row, action)">
                        {{ action.label }}
                    </UButton>
                </template>

                <template v-else-if="col.component">
                    <PageDataTableColumn :row="row" :column="col" :value="row[col.key]">
                    </PageDataTableColumn>
                </template>

                <template v-else>
                    {{ row[col.key] }}
                </template>
            </template>
        </UTable>
        <!-- 底部分页 -->
        <div class="sticky bottom-0 bg-green-200 py-4">
            <UPagination v-model="page" :page-count="limit" :total="total" show-last show-first />
        </div>
        <NuxtPage />
    </div>
</template>

<script setup>
const pageFetch = inject('pageFetch')
const pageActions = inject('pageActions')

const page = ref(1)
const limit = ref(10)

const { data, pending, error, refresh } = await pageFetch({
    page,
    limit
})

// 数据
const list = computed(() => {
    return data.value?.data.data || []
})
// 列配置
const columns = computed(() => {
    return data.value?.data.columns || []
})
// 总条数
const total = computed(() => {
    return data.value?.data.total || 0
})

// 处理action的query参数
const handlerActionTo = (rowData, action) => {
    let query
    const props = action.props || []

    if (Array.isArray(props)) {
        query = props.reduce((total, item) => {
            total[item] = rowData[item]
            return total
        }, {})
    }
    return {
        path: action.path || '',
        query
    }
}

provide('pageRefresh', refresh)

</script>
