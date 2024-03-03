<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:30:33
 * @LastEditTime: 2024-03-03 21:36:03
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\page\dataTable.vue
-->

<template>
    <div>
        {{ pending }}
        <UTable v-if="columns" :rows="list" :columns="columns" :loading="pending">
            <template v-for="col in columns" #[`${col.key}-data`]="{ row }">
                <template v-if="col.key === 'actions'">
                    <UButton v-for="action in pageStore.actions.filter(act => act?.positions.includes('row')) "
                        :key="action" :to="pageStore.handlerActionTo(row, action)">
                        {{ action.label }}
                    </UButton>
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

        <div>list: {{ list.length }}</div>
        <div>columns: {{ columns }}</div>
        <p v-for="item in pageStore.actions">{{ item }}</p>
        <NuxtPage />
    </div>
</template>

<script setup>
const pageStore = usePageStore()
const page = ref(1)
const limit = ref(10)

const columns = computed(() => {
    return pageStore.pageConfig.layoutProps.columns
})

const { data, pending, error, refresh } = await pageStore.fetch({
    page,
    limit
})

const list = computed(() => {
    return data.value.data.data
})
const total = computed(() => {
    return data.value.data.total
})

</script>
