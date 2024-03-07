<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:30:33
 * @LastEditTime: 2024-03-07 10:32:27
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\page\dataTable.vue
-->

<template>
    <div>
        {{ rowActions }}
        <UTable v-if="columns" :rows="list" :columns="columns" :loading="pending">
            <template v-for="col in columns" #[`${col.key}-data`]="{ row }">
                <template v-if="col.key === 'actions'">
                    <UButton v-for="action in rowActions " :key="action" :to="handlerActionTo(row, action)">
                        {{ action.label }}
                    </UButton>
                </template>

                <template v-else-if="col.component">
                    <LayoutPageDataTableColumn :row="row" :column="col" :value="row[col.key]">
                    </LayoutPageDataTableColumn>
                </template>

                <template v-else-if="col.key === 'id'">
                    custom !
                </template>

                <template v-else>
                    {{ row[col.key] }}
                </template>
            </template>
        </UTable>
        <UPagination v-model="page" :page-count="limit" :total="total" show-last show-first />

        <!-- <div>list: {{ list.length }}</div> -->
        <!-- <div>columns: {{ columns }}</div> -->
        <!-- <p v-for="item in pageStore.actions">{{ item }}</p> -->
        <slot />
    </div>
</template>

<script setup>
const pageStore = usePageStore()
const pageInfo = inject('pageInfo')
const page = ref(1)
const limit = ref(10)

// const { data, pending, error, refresh } = await pageStore.fetch('page', {
//     page,
//     limit
// })
const { data, pending, error, refresh } = await useFetch('/api' + pageInfo.value.path, {
    query: {
        page, limit
    }
})

const list = computed(() => {
    return data.value.data.data
})
const columns = computed(() => {
    return data.value.data.columns
})
const total = computed(() => {
    return data.value.data.total
})

const rowActions = computed(() => {
    return pageInfo.value.actions.filter(item => item.positions.includes('row'))
})

const handlerActionTo = (rowData, action) => {
    let query
    let props = action.props
    if (props) {
        if (typeof props === 'string') {
            props = [props]
        }
        query = props.reduce((total, item) => {
            total[item] = rowData[item]
            return total
        }, {})
    }

    return {
        path: `${pageInfo.value.path}/${action.value}`,
        query
    }
}

// 更新行
const updateRow = (query, data) => {
    const row = list.value.find(item => {
        return Object.keys(query).every(key => item[key] === query[key])
    })
    if (row) {
        Object.assign(row, data)
    }
}
provide('updateRow', updateRow)
// 删除行
const removeRow = (query) => {
    const row = list.value.find(item => {
        return Object.keys(query).every(key => item[key] === query[key])
    })
    if (row) {
        list.value.splice(list.value.indexOf(row), 1)
    }
}
provide('removeRow', removeRow)


</script>
