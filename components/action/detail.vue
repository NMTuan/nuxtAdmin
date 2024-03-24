<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:31:00
 * @LastEditTime: 2024-03-15 14:28:49
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
const actionInfo = inject('actionInfo')
const actionFetch = inject('actionFetch')
const actionBack = inject('actionBack')

const { data, pending } = await actionFetch(route.query)

const list = computed(() => {
    return data.value?.data.data || []
})
const columns = computed(() => {
    return data.value?.data.columns || []
})
</script>
