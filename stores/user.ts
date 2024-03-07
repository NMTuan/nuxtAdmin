/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-09 14:29:39
 * @LastEditTime: 2024-03-07 08:38:34
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
        if (clone.children) {
            delete clone.children
        }
        total.push({
            name: label,
            route: value,
            path: `/${path}`,
            ...clone
        })
        if (Array.isArray(item.children) && item.children.length > 0) {
            var child = flat(item.children, label, value)
            child.map((i) => total.push(i))
        }

        return total
    }, [])
}

export const useUserStore = defineStore('user', () => {
    const apiStore = useApiStore()
    const id = ref('')
    const name = ref('')
    const nick = ref('')
    const email = ref('')
    const role = ref([])
    const token = useCookie('user_token')
    const menu = ref([]) // 菜单，多维数组
    const routes = ref([]) // 根据菜单整理的路由权限，一维数组

    const login = (token: string) => {}
    const getMe = async () => {
        const userInfo = await $fetch('/api/users/me', {
            headers: {
                Authorization: 'Bearer ' + token.value
            },
            method: 'GET'
        })
        if (userInfo.code === 200) {
            id.value = userInfo.data.user.id
            menu.value = userInfo.data.menu
            routes.value = flat(menu.value)

            if (userInfo.data.api.url) {
                apiStore.url = userInfo.data.api.url
            }
            if (userInfo.data.api.login) {
                apiStore.login = userInfo.data.api.login
            }
            if (userInfo.data.api.logout) {
                apiStore.logout = userInfo.data.api.logout
            }
            if (userInfo.data.api.getMe) {
                apiStore.getMe = userInfo.data.api.getMe
            }
        }
        return userInfo.data
    }

    return {
        id,
        name,
        token,
        menu,
        routes,

        login,
        getMe
    }
})
