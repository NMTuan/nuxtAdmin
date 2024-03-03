/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:34:38
 * @LastEditTime: 2024-02-29 14:03:53
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\stores\page.ts
 */
import { defineStore } from 'pinia'

export const usePageStore = defineStore('page', () => {
    const userStore = useUserStore()
    const apiStore = useApiStore()
    const route = useRoute()

    const actions = ref([])
    const moduleConfig = ref({})
    const pageConfig = ref({})
    const actionConfig = ref({})
    const config = computed(() => {
        if (route.params.action) {
            return actionConfig.value
        } else if (route.params.page) {
            return pageConfig.value
        } else {
            return moduleConfig.value
        }
    })
    // 处理所以config信息
    const handlerConfig = (to) => {
        const { module, page, action } = to.params

        moduleConfig.value = userStore.routes.find(
            (item) => item.path === `/${module}`
        )
        pageConfig.value = page
            ? userStore.routes.find(
                  (item) => item.path === `/${module}/${page}`
              )
            : {}
        actionConfig.value = action
            ? userStore.routes.find(
                  (item) => item.path === `/${module}/${page}/${action}`
              )
            : {}

        handlerActions(to)
    }
    // 找到当前page下的所有action
    const handlerActions = (to) => {
        const { module, page, action } = to.params
        if (module && page) {
            // 找到path前缀是`/module/page`的action
            actions.value = userStore.routes.filter((item) =>
                item.path.startsWith(`/${module}/${page}/`)
            )
        } else {
            actions.value = []
        }
    }
    // 根据行数据及action配置，组合url to 数据
    const handlerActionTo = (rowData, action) => {
        let query
        const props = action.props

        if (Array.isArray(props)) {
            query = props.reduce((total, item, index) => {
                total[item] = rowData[item]
                return total
            }, {})
        }
        return {
            path: action.path,
            query
        }
    }

    const fetch = (query) => {
        const url = `${apiStore.url}${config.value.path}`
        const options = {
            method: config.value.fetchType || 'GET',
            query,
            headers: {
                Authorization: 'Bearer ' + userStore.token
            }
        }
        return useFetch(url, options)
    }
    return {
        config,
        moduleConfig,
        pageConfig,
        actionConfig,
        actions,
        handlerConfig,
        handlerActionTo,
        fetch: fetch
    }
})
