<template>
    <ComFieldEnum v-if="component === 'enum'" />
    <template v-if="component === 'detail'">
        <UButton @click="handlerClick" variant="link">{{ value }}</UButton>
        <Action v-model="action" :row="row" />
    </template>
</template>
<script setup>
const props = defineProps({
    component: {
        type: String,
        default: ''
    },
    value: {
        type: String,
        default: ''
    },
    row: {
        type: Object,
        default: () => { }
    },
    column: {
        type: Object,
        default: () => { }
    }
})

const action = ref({})
const handlerClick = () => {
    action.value = props.column
}

provide('value', props.value)
provide('column', props.column)

</script>
