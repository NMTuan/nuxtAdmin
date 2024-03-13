<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-13 16:25:12
 * @LastEditTime: 2024-03-13 16:44:38
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\action\card.vue
-->
<template>
    <UCard
        :ui="{ base: 'h-full flex flex-col', rounded: 'rounded-none', shadow: 'shadow-none', body: { base: 'flex-1 overflow-hidden', padding: 'sm:p-0 p-0' } }">
        <template #header>
            <div class="flex items-center justify-between">
                <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                    {{ label }}
                </h3>
                <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="close" />
            </div>
        </template>
        <simplebar class="h-full px-4 py-5 sm:p-6">
            <slot />
        </simplebar>
        <template #footer>
            <slot name="footer" />
        </template>
    </UCard>
</template>
<script setup>
import simplebar from 'simplebar-vue';


const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    close: {
        type: Function,
        default: () => { }
    }
})

</script>
