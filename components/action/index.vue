<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-12 18:43:08
 * @LastEditTime: 2024-03-23 15:45:37
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\action\index.vue
-->
<template>
    <div v-if="Object.keys(modelValue).length > 0">
        <USlideover v-if="modelValue.showType === 'slideover'" :model-value="true"
            :prevent-close="['form'].includes(modelValue.component)" @close="actionBack">
            <ActionForm v-if="modelValue.component === 'form'" />
            <ActionDetail v-else-if="modelValue.component === 'detail'" />
            <ActionConfirm v-else-if="modelValue.component === 'confirm'" />
            <slot v-else />
            <input type="text" class="opacity-0 h-0 overflow-hidden" />
        </USlideover>
        <UModal v-else :model-value="true" :prevent-close="['form'].includes(modelValue.component)" @close="actionBack">
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
// provide('query', query)

// 获取数据
const actionFetch = () => {
    const path = props.modelValue.fetchUrl || props.modelValue.path
    return useLazyFetch(`${baseURL}${path}`, {
        method: props.modelValue.fetchType || 'GET',
        query: query.value,
        params: props.modelValue.params,
        headers: {
            Authorization: token.value
        }
    })
}
provide('actionFetch', actionFetch)

const actionPost = (body) => {
    const path = props.modelValue.submitUrl || props.modelValue.path
    return $fetch(`${baseURL}${path}`, {
        method: 'POST',
        query: query.value,
        params: props.modelValue.params,
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
