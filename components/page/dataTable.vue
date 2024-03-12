<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:30:33
 * @LastEditTime: 2024-03-12 20:47:40
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\page\dataTable.vue
-->

<template>
    <div class="bg-white border rounded">

        <div>q: {{ q }}</div>
        <div>action: {{ action }}</div>
        <div>pageActions: {{ pageActions }}</div>
        <div class="flex items-center justify-between m-6">
            <!-- 功能操作 -->
            <div>
                <!-- <UButton v-for="item in pageActions.filter(action => action.positions.includes('top')) "
                    :to="item.path">
                    {{ item.label }}
                </UButton> -->
                <UButton v-for="item in pageActions.filter(action => action.positions.includes('top'))  "
                    @click="handlerAction(item)">
                    {{ item.label }}
                </UButton>
            </div>
            <!-- 搜索 -->
            <PageDataTableSearch v-model="q" :fields="searchFields" :adv-fields="advFields" />
        </div>

        <!-- 快捷筛选 -->
        <PageDataTableFilter v-model="q" :filters="filters" />

        <!-- 数据表格 -->
        <UTable v-if="columns" :rows="list" :columns="columns" :loading="pending" class="border-b mx-6">
            <template v-for="col in columns" #[`${col.key}-data`]="{ row }">
                <template v-if="col.key === 'actions'">
                    <!-- <UButton v-for="action in pageActions.filter(action => action.positions.includes('row'))  "
                        :to="handlerActionTo(row, action)">
                        {{ action.label }}
                    </UButton> -->
                    <UButton v-for="action in pageActions.filter(action => action.positions.includes('row'))  "
                        @click="handlerAction(action, row)">
                        {{ action.label }}
                    </UButton>
                </template>

                <template v-else-if="col?.component">
                    <PageDataTableColumn :row="row" :column="col" :value="row[col.key]">
                    </PageDataTableColumn>
                </template>

                <template v-else>
                    {{ row[col.key] }}
                </template>
            </template>
        </UTable>
        <!-- 底部分页 -->
        <div class="sticky bottom-0 p-6 bg-white/75 dark:bg-white/75 backdrop-blur">
            <UPagination v-model="q.page" :page-count="q.limit" :total="total" show-last show-first />
        </div>
        <!-- <NuxtPage /> -->
        <Action v-model="action" :row="row" />
    </div>
</template>

<script setup>
const pageFetch = inject('pageFetch')
const pageActions = inject('pageActions')

const q = ref({
    page: 1,
    limit: 10
})

const { data, pending, error, refresh } = await pageFetch(q)

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

const searchFields = computed(() => {
    if (Array.isArray(data.value?.data.search)) {
        return data.value.data.search.reduce((total, item) => {
            total.push({
                label: columns.value.find(col => col.key === item.key)?.label,
                ...item
            })
            return total
        }, [])
    }
    return []
})

const advFields = computed(() => {
    if (Array.isArray(data.value?.data.advSearch)) {
        return data.value.data.advSearch.reduce((total, item) => {
            total.push({
                label: columns.value.find(col => col.key === item.key)?.label,
                ...item
            })
            return total
        }, [])
    }
    return []
})

const filters = computed(() => {
    return data.value?.data.filters || []
})

const action = ref({})
const row = ref({})

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

const handlerAction = (act, rowData) => {
    action.value = act
    row.value = rowData || {}
}

provide('pageRefresh', refresh)

</script>
