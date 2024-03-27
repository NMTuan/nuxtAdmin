<template>
    <div>
        {{ column.items.find(item => item.value === value)?.label || value }}
    </div>
</template>
<script setup>
const column = inject('column')
const value = inject('value')
</script>
