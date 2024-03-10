<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:16:40
 * @LastEditTime: 2024-03-10 18:44:26
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\pages\[module]\[page]\[action].vue
-->

<template>
    <div>
        <ActionSlideover v-if="actionInfo.showType === 'slideover'"
            :prevent-close="['form'].includes(actionInfo?.component)">
            <ActionForm v-if="actionInfo?.component === 'form'" />
            <ActionDetail v-else-if="actionInfo?.component === 'detail'" />
            <ActionConfirm v-else-if="actionInfo?.component === 'confirm'" />
            <NuxtPage v-else />
        </ActionSlideover>
        <ActionModel v-else :prevent-close="['form'].includes(actionInfo?.component)">
            <ActionForm v-if="actionInfo?.component === 'form'" />
            <ActionDetail v-else-if="actionInfo?.component === 'detail'" />
            <ActionConfirm v-else-if="actionInfo?.component === 'confirm'" />
            <NuxtPage v-else />
        </ActionModel>
        <!-- <LayoutActionEdit v-if="pageStore.actionConfig.layout === 'edit'"></LayoutActionEdit> -->
        <!-- <LayoutActionDelete v-if="pageStore.actionConfig.layout === 'delete'"></LayoutActionDelete> -->
    </div>
</template>

<script setup>

const route = useRoute()
const userStore = useUserStore()
const { token } = useAuth()

const moduleInfo = inject('moduleInfo')
const pageInfo = inject('pageInfo')
const baseURL = inject('baseURL')

const { module, page, action } = route.params
const actionInfo = computed(() => {
    return userStore.routes.find(route => route.route === `${module}__${page}__${action}`)
})
provide('actionInfo', actionInfo)

// 获取数据
const actionFetch = (query = {}) => {
    return useLazyFetch(`${baseURL}${actionInfo.value.path}`, {
        method: actionInfo.fetchType || 'GET',
        headers: {
            Authorization: token.value
        },
        query
    })
}
provide('actionFetch', actionFetch)

const actionPost = (body) => {
    return $fetch(`${baseURL}${actionInfo.value.path}`, {
        method: 'POST',
        query: route.query,
        body,
        headers: {
            Authorization: 'Bearer ' + userStore.token
        }
    })
}
provide('actionPost', actionPost)

const actionBack = () => {
    // let path = config.value.path.split('/')
    // path.pop()
    navigateTo(pageInfo.value.path)
}
provide('actionBack', actionBack)


</script>
