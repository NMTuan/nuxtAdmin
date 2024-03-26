<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-13 16:25:12
 * @LastEditTime: 2024-03-26 15:17:04
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\com\card\index.vue
-->
<template>
    <UCard
        :ui="{ base: 'h-full flex flex-col', rounded: 'rounded-none', shadow: 'shadow-none', body: { base: 'flex-1 overflow-hidden', padding: 'sm:p-0 p-0' } }">
        <template #header>
            <div class="flex items-center justify-between">
                <h3 class="text-base font-semibold leading-6">
                    {{ label }}
                </h3>
                <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="close" />
            </div>
        </template>
        <simplebar class="h-full px-4 py-5">
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
<style>
/* fix model 弹窗中， select 下拉菜单异常 */
.simplebar-content-wrapper {
    height: 100% !important;
}
</style>
