<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-06 20:46:18
 * @LastEditTime: 2024-03-07 11:09:34
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\x.vue
-->

<template>
    <div class="border p-4 m-4">
        <p>level: {{ level }}</p>
        <p>path: {{ path }}</p>
        <p>pageInfo: {{ pageInfo }}</p>
        <UButton @click="handlerClick">o</UButton>
        <LayoutPageDataTable v-if="pageInfo?.type === 'dataTable'">
            <X v-if="newSlug.length > 0" :slug="newSlug" :level="level + 1"></X>
        </LayoutPageDataTable>
        <LayoutActionEdit v-else-if="pageInfo?.type === 'edit'">

        </LayoutActionEdit>
        <X v-else-if="newSlug.length > 0" :slug="newSlug" :level="level + 1"></X>

    </div>
</template>

<script setup>


const route = useRoute()
const userStore = useUser2Store()
const props = defineProps({
    slug: {
        type: Array,
        default: () => []
    },
    level: {
        type: Number,
        default: 1
    }
})

const newSlug = props.slug.slice(1, props.slug.length)
const path = computed(() => {
    return route.params.slug.slice(0, props.level)
})
const pageInfo = computed(() => {
    if (path.value) {
        return userStore.routes.find(item => item.route === path.value.join('__'))
    } else {
        return {}
    }
})
provide('pageInfo', pageInfo)




const x = () => {
    console.log('x ->', props.slug)
}
provide('x', x)

const o = inject('x')

const handlerClick = () => {
    if (typeof o === 'function') {
        o()
    }
}



</script>
