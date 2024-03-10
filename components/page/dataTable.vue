<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:30:33
 * @LastEditTime: 2024-03-10 18:37:14
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\page\dataTable.vue
-->

<template>
    <div class="bg-white border rounded">

        <!-- 快捷筛选 -->
        <UHorizontalNavigation :links="links" class="border-b" :ui="{ wrapper: 'px-6' }" />

        <div class="flex items-center justify-between mt-6 mb-2 px-6">
            <!-- 功能操作 -->
            <div>
                <UButton v-for="item in pageActions.filter(action => action?.positions.includes('top')) "
                    :to="item.path">
                    {{ item.label }}
                </UButton>
            </div>
            <!-- 搜索 -->
            <div class="flex">
                <UInput placeholder="搜索" clearable class="w-40" />
                <UButtonGroup orientation="horizontal" class="ml-2">
                    <UButton>搜索</UButton>
                    <UDropdown :items="items" :popper="{ placement: 'bottom-end', arrow: true }"
                        :ui="{ width: 'w-auto' }">
                        <UButton icon="i-heroicons-chevron-down-20-solid" class="border-l" />
                    </UDropdown>
                </UButtonGroup>
            </div>

        </div>

        <!-- 数据表格 -->
        <UTable v-if="columns" :rows="list" :columns="columns" :loading="pending" class="border-b mx-6">
            <template v-for="col in columns" #[`${col.key}-data`]="{ row }">
                <template v-if="col.key === 'actions'">
                    <UButton v-for="action in pageActions.filter(action => action?.positions.includes('row')) "
                        :to="handlerActionTo(row, action)">
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








const links = [{
    label: 'All',
    // badge: 100,
    to: '/user/user'
}, {
    label: 'Installation',
    icon: 'i-heroicons-home',
    to: '/getting-started/installation'
}, {
    label: 'Horizontal Navigation',
    icon: 'i-heroicons-chart-bar',
    to: `/components/horizontal-navigation`
}, {
    label: 'Command Palette',
    icon: 'i-heroicons-command-line',
    to: '/components/command-palette'
}]

const items = [
    [
        { label: '高级搜索' },
        { label: '重置搜索' }
    ]
]
</script>
