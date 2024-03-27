<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:31:00
 * @LastEditTime: 2024-03-27 14:26:53
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\action\detail.vue
-->

<template>
    <ComCard :label="actionInfo.title || actionInfo.label" :close="actionBack">
        <UTable :rows="data?.data.fields" :loading="pending" :columns="columns">
            <template v-for="col in columns" #[`${col.key}-data`]="{ row }">
                <template v-if="col.key === 'value'">
                    <template v-if="row.component">
                        <ComField :component="row.component" :row="row" :column="row"
                            :value="data.data.data[row.key]" />
                    </template>
                    <template v-else>
                        {{ data.data.data[row.key] }}
                    </template>
                </template>
                <template v-else>
                    {{ row[col.key] }}
                </template>
            </template>

        </UTable>
        <template #footer>
            <div class="flex justify-end">
                <UButton @click="actionBack">
                    {{ actionInfo.local?.close || $t('action.detail.close') }}
                </UButton>
            </div>
        </template>
    </ComCard>
</template>

<script setup>
const route = useRoute()
const { t } = useI18n()
const actionInfo = inject('actionInfo')
const actionFetch = inject('actionFetch')
const actionBack = inject('actionBack')

const { data, pending } = await actionFetch(route.query)

const columns = computed(() => {
    return [
        { key: 'label', label: data.value?.data.local?.label || t('action.detail.label') },
        // { key: 'key', label: '字段' },
        { key: 'value', label: data.value?.data.local?.value || t('action.detail.value') },
    ]
})
</script>
