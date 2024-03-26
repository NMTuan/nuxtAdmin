<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-25 15:36:02
 * @LastEditTime: 2024-03-26 11:07:44
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
</template>
<script setup>
import { format } from 'date-fns'


const field = inject('field')
const formData = inject('formData')

const date = computed({
    set(val) {
        formData.value[field.key] = {
            start: val.start ? format(val.start, field.format || 'yyyy-MM-dd') : null,
            end: val.end ? format(val.end, field.format || 'yyyy-MM-dd') : null
        }

    },
    get() {
        if (!formData.value[field.key]) return { start: null, end: null }
        return {
            start: formData.value[field.key].start ? new Date(formData.value[field.key].start) : null,
            end: formData.value[field.key].end ? new Date(formData.value[field.key].end) : null
        }
    }
})

const showVal = computed(() => {
    if (date.value) {
        const start = date.value.start ? format(date.value.start, field.showFormat || field.format || 'yyyy-MM-dd') : ''
        const end = date.value.end ? format(date.value.end, field.showFormat || field.format || 'yyyy-MM-dd') : ''
        if (start || end) {
            return `${start} ~ ${end}`
        }
        return ''
    }
    return ''
})

</script>
