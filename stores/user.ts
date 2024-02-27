/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-09 14:29:39
 * @LastEditTime: 2024-02-27 15:19:24
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\stores\user.ts
 */
import { defineStore } from 'pinia'

const flat = (arr, pLabel = '', pValue = '') => {
    return arr.reduce((total, item, index) => {
        const label = pLabel ? `${pLabel}-${item.label}` : item.label
        const value = pValue ? `${pValue}__${item.value}` : item.value
        total.push({
            name: label,
            route: value,
            label: item.label,
            value: item.value
        })
        if (Array.isArray(item.children) && item.children.length > 0) {
            var child = flat(item.children, label, value)
            child.map((i) => total.push(i))
        }

        return total
    }, [])
}

export const useUserStore = defineStore('user', () => {
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
                Authorization: token.value || ''
            },
            method: 'GET'
        })
        if (userInfo.code === 200) {
            menu.value = userInfo.data.menu
            routes.value = flat(menu.value)
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
