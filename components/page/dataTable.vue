<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:30:33
 * @LastEditTime: 2024-03-14 19:29:50
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\page\dataTable.vue
-->

<template>
    <div class="bg-white dark:bg-gray-900 border dark:border-gray-800 rounded">
        <div class="flex items-center justify-between m-6">
            <!-- 功能操作 -->
            <div>
                <UButton v-for="item in pageActions.filter(action => action.positions.includes('top'))"
                    @click="handlerAction(item)" :icon="item.icon">
                    {{ item.label }}
                </UButton>
            </div>
            <!-- 搜索 -->
            <PageDataTableSearch v-model="q" :fields="searchFields" :adv-fields="advFields" />
        </div>

        <!-- 快捷筛选 -->
        <PageDataTableFilter v-model="q" :filters="filters" />

        <!-- 数据表格 -->
        <UTable v-if="columns" :rows="list" :columns="columns" :loading="pending"
            class="border-b dark:border-gray-700 mx-6">
            <template v-for="col in columns" #[`${col.key}-data`]="{ row }">
                <template v-if="col.key === 'actions'">
                    <div class="flex items-center gap-1">
                        <UButton v-for="action in pageActions.filter(action => action.positions.includes('row'))  "
                            @click="handlerAction(action, row)" :icon="action.icon" :color="action.color || 'primary'"
                            :variant="action.variant || 'link'">
                            {{ action.hideLabel ? '' : action.label }}
                        </UButton>
                    </div>
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
        <div class="sticky bottom-0 p-6 bg-white/75 dark:bg-gray-900/75 backdrop-blur">
            <div class="flex items-center justify-between">
                <UPagination v-model="q.page" :page-count="q.limit" :total="total" show-last show-first />
                <div class="flex items-center">
                    <div class="text-sm mr-3">共 {{ total }} 条</div>
                    <USelect v-model="q.limit" :options="limitOptions" option-attribute="label" />
                </div>
            </div>
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
const limitOptions = ref([
    { value: '10', label: '10 条/页' },
    { value: '20', label: '20 条/页' },
    { value: '50', label: '50 条/页' },
    { value: '100', label: '100 条/页' },
])

const handlerAction = (act, rowData) => {
    action.value = act
    row.value = rowData || {}
}

provide('pageRefresh', refresh)

</script>
