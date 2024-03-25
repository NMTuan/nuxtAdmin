<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-25 15:36:02
 * @LastEditTime: 2024-03-25 17:22:16
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\com\form\dateRange.vue
-->
<template>
    <UPopover :popper="{ placement: 'bottom-start' }" :ui="{ trigger: 'block' }">
        <UButtonGroup size="sm" orientation="horizontal" class="flex">
            <UInput v-model="showVal" readonly class="flex-1" />
            <UButton icon="i-ri-calendar-todo-line" color="gray" />
        </UButtonGroup>
        <template #panel="{ close }">
            <ComDatePicker v-model="date" @close="close" />
        </template>
    </UPopover>
    <pre>{{ field }}</pre>
    <pre>{{ formData }}</pre>
</template>
<script setup>
import { format } from 'date-fns'


const field = inject('field')
const formData = inject('formData')

const date = computed({
    set(val) {
        // formData.value[field.key] = format(val, field.format || 'yyyy-MM-dd')

    },
    get() {
        // return formData.value[field.key] ? new Date(formData.value[field.key]) : null
        return {
            start: formData.value[field.key].start ? new Date(formData.value[field.key].start) : null,
            end: formData.value[field.key].end ? new Date(formData.value[field.key].end) : null
        }
    }
})

const showVal = computed(() => {
    if (date.value) {
        return JSON.stringify(date.value)
        // return format(date.value, field.showFormat || field.format || 'yyyy-MM-dd')
    }
    return ''
})

</script>
