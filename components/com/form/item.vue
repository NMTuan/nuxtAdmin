<template>
    <ComFormSelect v-if="field.type === 'select'" />
    <ComFormInput v-else />
</template>
<script setup>
const props = defineProps({
    field: {
        type: Object,
        default: () => { }
    }
})
provide('field', props.field)
</script>
