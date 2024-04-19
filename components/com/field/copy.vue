<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-04-19 09:31:23
 * @LastEditTime: 2024-04-19 09:53:24
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\com\field\copy.vue
-->
<template>
    <div class="flex items-center">
        <div v-if="position === 'before'" class="mr-1">
            <UButton variant="ghost" :color="color" :icon="icon" square @click="onClick" />
        </div>
        {{ value }}
        <div v-if="position === 'after'" class="ml-1">
            <UButton variant="ghost" :color="color" :icon="icon" square @click="onClick" />
        </div>
    </div>
</template>
<script setup>
const column = inject('column')
const value = inject('value')
const state = ref(false)
let dt

const position = computed(() => {
    return column.position || 'before'
})
const icon = computed(() => {
    if (state.value) {
        return 'i-ri-check-line'
    }
    return column.icon || 'i-ri-file-copy-line'
})
const color = computed(() => {
    return column.color || 'gray'
})

const onClick = () => {
    clearTimeout(dt)
    navigator.clipboard.writeText(value)
    state.value = true
    dt = setTimeout(() => {
        state.value = false
    }, 300)
}
</script>
