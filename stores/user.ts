/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-09 14:29:39
 * @LastEditTime: 2024-03-08 10:31:23
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\stores\user.ts
 */
import { defineStore } from 'pinia'

const flat = (arr, pLabel = '', pValue = '') => {
    return arr.reduce((total, item, index) => {
        const label = pLabel ? `${pLabel}-${item.label}` : item.label
        const value = pValue ? `${pValue}__${item.value}` : item.value
        const path = value.replaceAll('__', '/')
        const clone = JSON.parse(JSON.stringify(item))
        delete clone.children
        delete clone.actions
        total.push({
            name: label,
            route: value,
            path: `/${path}`,
            ...clone
        })
        if (Array.isArray(item.actions) && item.actions.length > 0) {
            var child = flat(item.actions, label, value)
            child.map((i) => {
                i.__type = 'action'
                total.push(i)
            })
        }
        if (Array.isArray(item.children) && item.children.length > 0) {
            var child = flat(item.children, label, value)
            child.map((i) => total.push(i))
        }

        return total
    }, [])
}

export const useUserStore = defineStore('user', () => {
    const { data, status } = useAuth()
    // 根据菜单整理的路由权限，一维数组
    const routes = computed(() => {
        if (status.value === 'authenticated') {
            return flat(data.value.menu)
        }
        // unauthenticated
        return []
    })

    return {
        menu: status.value === 'authenticated' ? data.value.menu : [],
        routes
    }
})
