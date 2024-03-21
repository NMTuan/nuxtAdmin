/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-09 14:29:39
 * @LastEditTime: 2024-03-21 12:33:01
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\stores\route.ts
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
                if (!i.showType) {
                    i.showType = 'modal'
                }
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

const handlerMenu = (menu, parentPath?: string) => {
    return menu.reduce((total, item) => {
        const newItem = JSON.parse(JSON.stringify(item))
        let path = (parentPath || '') + `/${newItem.value}`
        if (newItem.children) {
            newItem.children = handlerMenu(newItem.children, path)
        }
        delete newItem.actions
        newItem.path = path
        total.push(newItem)
        return total
    }, [])
}

const handlerTopbar = (topbar) => {
    return topbar.reduce((total, item) => {
        let newItem = JSON.parse(JSON.stringify(item))
        if (typeof newItem === 'string') {
            newItem = {
                component: newItem
            }
        }
        if (newItem.component === 'darkMode') {
            newItem.icon = newItem.icon || 'i-ri-sun-line'
            newItem.activeIcon = newItem.activeIcon || 'i-ri-moon-line'
        }
        if (newItem.component === 'fullScreen') {
            newItem.icon = newItem.icon || 'i-ri-fullscreen-line'
            newItem.activeIcon =
                newItem.activeIcon || 'i-ri-fullscreen-exit-line'
        }
        if (newItem.component === 'i18n') {
            newItem.icon = newItem.icon || 'i-ri-translate-2'
        }

        total.push(newItem)
        return total
    }, [])
}

export const useRouteStore = defineStore('route', () => {
    const { data, status } = useAuth()

    // 根据菜单整理的路由权限，一维数组
    const routes = computed(() => {
        if (status.value !== 'authenticated') {
            return []
        }
        return flat(data.value.data.menu)
    })
    // 菜单
    const menus = computed(() => {
        if (status.value !== 'authenticated') {
            return []
        }
        if (Array.isArray(data.value.data.menu)) {
            return handlerMenu(data.value.data.menu)
        }
        return []
    })

    const topbar = computed(() => {
        if (status.value !== 'authenticated') {
            return []
        }
        if (Array.isArray(data.value.data.topbar)) {
            return handlerTopbar(data.value.data.topbar)
        }
        return []
    })

    return {
        routes,
        menus,
        topbar
    }
})
