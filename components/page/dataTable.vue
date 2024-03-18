<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:30:33
 * @LastEditTime: 2024-03-18 14:30:20
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
            <PageDataTableSearch v-show="searchFields.length > 0" v-model="q" :fields="searchFields"
                :adv-fields="advFields" />
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
                    <PageDataTableColumn :component="col.component" :row="row" :column="col" :value="row[col.key]">
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
                    <div class="text-sm mr-3">{{ $t('page.dataTable.total', { total: total }) }}</div>
                    <USelect v-model="q.limit" :options="pageSizeOptions" option-attribute="label" />
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
const { t } = useI18n()

const q = ref({
    page: 1,
    limit: 10
})

const { data, pending, error, refresh } = await pageFetch(q)

// 数据
const list = computed(() => {
    return pending.value ? [] : data.value?.data?.data || []
})

// 列配置
const columns = computed(() => {
    if (Array.isArray(data.value?.data?.columns)) {
        return data.value.data.columns
    }
    // 没有声明columns，则用data里的第一条数据构建columns
    if (list.value.length > 0) {
        return Object.keys(list.value[0]).map(key => {
            return {
                key: key,
                label: key
            }
        })
    }
    return []
})
// 总条数
const total = computed(() => {
    return pending.value ? 0 : data.value?.data?.total || 0
})

const searchFields = computed(() => {
    if (pending.value) {
        return []
    }
    if (Array.isArray(data.value?.data?.search)) {
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
    if (pending.value) {
        return []
    }
    if (Array.isArray(data.value?.data?.advSearch)) {
        return data.value.data?.advSearch.reduce((total, item) => {
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
    return pending.value ? [] : data.value?.data?.filters || []
})

const action = ref({})
const row = ref({})

const pageSizeOptions = computed(() => {
    return [10, 20, 50, 100].map((item) => {
        return {
            value: item,
            label: t('page.dataTable.pageSize', { size: item })
        }
    })
})

const handlerAction = (act, rowData) => {
    action.value = act
    row.value = rowData || {}
}

provide('pageRefresh', refresh)

</script>
