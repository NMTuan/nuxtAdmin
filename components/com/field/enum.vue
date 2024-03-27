<template>
    <UBadge v-if="item.color" :color="item.color" :variant="item.variant">
        {{ item?.label || value }}
    </UBadge>
    <div v-else>
        {{ item?.label || value }}
    </div>
</template>
<script setup>
const column = inject('column')
const value = inject('value')

const item = computed(() => {
    return column.items.find(item => item.value === value)
})
</script>
