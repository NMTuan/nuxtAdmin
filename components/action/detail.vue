<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:31:00
 * @LastEditTime: 2024-03-25 14:40:50
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\action\detail.vue
-->

<template>
    <ComCard :label="actionInfo.title || actionInfo.label" :close="actionBack">
        <UTable :rows="list" :loading="pending" :columns="columns">
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

const list = computed(() => {
    if (typeof data.value?.data.data === 'object') {
        return Object.keys(data.value.data.data).reduce((total, key) => {
            total.push({
                key: key,
                label: data.value.data.fields?.[key] || 'key',
                value: data.value.data.data[key]
            })
            return total
        }, [])
    }

    return []
})
const columns = computed(() => {
    return [
        { key: 'label', label: data.value?.data.local?.label || t('action.detail.label') },
        // { key: 'key', label: '字段' },
        { key: 'value', label: data.value?.data.local?.value || t('action.detail.value') },
    ]
})
</script>
