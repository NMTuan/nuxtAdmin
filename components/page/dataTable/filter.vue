<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-12 13:00:26
 * @LastEditTime: 2024-03-13 16:51:18
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\page\dataTable\filter.vue
-->
<template>
    <div v-if="filters.length > 0" class="bg-gray-50 border-y py-2 px-4 mb-4">
        <UButton v-for="item in filters" :variant="handlerVariant(item)" class="ml-2" @click="handlerClick(item)"
            :color="handlerColor(item)">
            {{ item.label }}
        </UButton>
    </div>
</template>
<script setup>

const props = defineProps({
    modelValue: {
        type: Object,
        default: () => { }
    },
    filters: {
        type: Array,
        default: () => []
    }
})
const emits = defineEmits(['update:modelValue'])

const oriQ = JSON.stringify(props.modelValue)  // 原始表单值

// const filters = ref([
//     { label: '全部', query: {} },
//     { label: '未处理', query: { name: 'a' } },
//     { label: '已处理', query: { email: 'b' } }
// ])

const links = [{
    label: 'All',
    click: () => {
        reset()
    }
    // badge: 100,
    // to: '/user/user'
}, {
    label: 'name === a',
    icon: 'i-heroicons-home',
    click: () => {
        props.modelValue.name = 'a'
    }
    // to: '/getting-started/installation'
}, {
    label: 'query url',
    icon: 'i-heroicons-chart-bar',
    to: {
        path: '/user/user',
        query: {
            name: 'b'
        },
        hash: '#hash'
    }
}, {
    label: 'test',
    icon: 'i-heroicons-command-line',
    to: '/user/user/test'
}]

const handlerClick = (item) => {
    const newQ = JSON.parse(oriQ)
    if (!item.query) {
        item.query = {}
    }
    Object.keys(item.query).map((key) => {
        newQ[key] = item.query[key]
    })
    emits('update:modelValue', newQ)
}

const handlerColor = (item) => {
    const clone = JSON.parse(JSON.stringify(props.modelValue))
    //循环oriQ，删除clone中所有的key
    Object.keys(JSON.parse(oriQ)).map((key) => {
        delete clone[key]
    })
    // 删除空值
    Object.keys(clone).map((key) => {
        if (clone[key] === '') {
            delete clone[key]
        }
    })

    if (JSON.stringify(item.query) === JSON.stringify(clone)) {
        return 'primary'
    }
    return 'gray'
}
const handlerVariant = (item) => {
    if (handlerColor(item) === 'primary') {
        return 'solid'
    } else {
        return 'soft'
    }
}
</script>
