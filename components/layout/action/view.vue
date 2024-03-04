<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:31:00
 * @LastEditTime: 2024-03-04 14:26:02
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\action\view.vue
-->

<template>
    <UModal v-model="isOpen" @close="handlerClose">
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
const isOpen = ref(false)

const handlerClose = () => {
    isOpen.value = false
    pageStore.goBack()
}

const { data, pending } = await pageStore.fetch('action', route.query)

const list = computed(() => {
    return data.value.data.data
})
const columns = computed(() => {
    return data.value.data.columns
})

onMounted(() => {
    isOpen.value = true
})

</script>
