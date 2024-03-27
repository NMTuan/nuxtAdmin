<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-13 14:09:00
 * @LastEditTime: 2024-03-13 14:17:43
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\menu\toolTip.vue
-->
<template>
    <UTooltip class="block xl:hidden" :text="label" :popper="{ arrow: true, placement: 'right' }"
        :ui="{ base: 'text-base h-10 px-4 py-2' }">
        <div class="flex items-center justify-center">
            <slot />
        </div>
    </UTooltip>
    <div class="hidden xl:block">
        <slot />
    </div>
</template>
<script setup>
const props = defineProps({
    label: {
        type: String,
        default: ''
    }
})
</script>
