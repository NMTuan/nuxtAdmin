<template>
    <div v-if="Object.keys(modelValue).length > 0">
        <USlideover :model-value="modelValue.showType === 'slideover'"
            :prevent-close="['form'].includes(modelValue.component)" @close="actionBack">
            <ActionForm v-if="modelValue.component === 'form'" />
            <ActionDetail v-else-if="modelValue.component === 'detail'" />
            <ActionConfirm v-else-if="modelValue.component === 'confirm'" />
            <slot v-else />
            <input type="text" class="opacity-0 h-0 overflow-hidden" />
        </USlideover>
        <UModal :model-value="modelValue.showType === 'modal'" :prevent-close="['form'].includes(modelValue.component)"
            @close="actionBack">
            <ActionForm v-if="modelValue.component === 'form'" />
            <ActionDetail v-else-if="modelValue.component === 'detail'" />
            <ActionConfirm v-else-if="modelValue.component === 'confirm'" />
            <slot v-else />
            <input type="text" class="opacity-0 h-0 overflow-hidden" />
        </UModal>
    </div>
</template>
<script setup>
const baseURL = inject('baseURL')
const { token } = useAuth()

const props = defineProps({
    modelValue: {
        type: Object,
        default: () => { }
    },
    row: {
        type: Object,
        default: () => { }
    }
})
const emits = defineEmits(['update:modelValue'])

const actionInfo = computed(() => {
    return props.modelValue || {}
})
provide('actionInfo', actionInfo)

const query = computed(() => {
    if (Array.isArray(props.modelValue.query)) {
        return props.modelValue.query.reduce((total, key) => {
            total[key] = props.row[key]
            return total
        }, {})
    }
    return {}
})
provide('query', query)

const path = computed(() => {
    return `${baseURL}${props.modelValue.path}`
})


// 获取数据
const actionFetch = () => {
    return useLazyFetch(path.value, {
        method: props.modelValue.fetchType || 'GET',
        query: query.value,
        headers: {
            Authorization: token.value
        }
    })
}
provide('actionFetch', actionFetch)

const actionPost = (body) => {
    return $fetch(path.value, {
        method: 'POST',
        query: query.value,
        body,
        headers: {
            Authorization: token.value
        }
    })
}
provide('actionPost', actionPost)

const actionBack = () => {
    emits('update:modelValue', {})
}
provide('actionBack', actionBack)

</script>
