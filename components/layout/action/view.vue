<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:31:00
 * @LastEditTime: 2024-03-05 12:30:18
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\action\view.vue
-->

<template>
    <UModal :model-value="isOpen" @close="handlerClose">
        <UCard>
            <template #header>
                <div class="flex items-center justify-between">
                    <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                        {{ pageStore.actionConfig.label }}
                    </h3>
                    <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                        @click="handlerClose" />
                </div>
            </template>

            <UTable :rows="list" :loading="pending" :columns="columns">
            </UTable>

            <!-- <div>{{ $route.params }}</div> -->
            <!-- <div>{{ $route.query }}</div> -->
            <!-- <div>{{ pageStore.actionConfig }}</div> -->

            <template #footer>
                <div class="flex justify-end">
                    <UButton @click="handlerClose">close</UButton>
                </div>
            </template>
        </UCard>

    </UModal>
</template>

<script setup>
const route = useRoute()
const pageStore = usePageStore()
const isOpen = ref(true)

const { data, pending } = await pageStore.fetch('action', route.query)

const list = computed(() => {
    return data.value.data.data
})
const columns = computed(() => {
    return data.value.data.columns
})

const handlerClose = () => {
    pageStore.goBack()
}
</script>
