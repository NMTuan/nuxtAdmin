/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-07 08:40:24
 * @LastEditTime: 2024-03-07 11:16:55
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\stores\user2.ts
 */

const flat = (arr, pLabel = '', pValue = '') => {
    return arr.reduce((total, item, index) => {
        const label = pLabel ? `${pLabel}-${item.label}` : item.label
        const value = pValue ? `${pValue}__${item.value}` : item.value
        const path = value.replaceAll('__', '/')
        const clone = JSON.parse(JSON.stringify(item))
        delete clone.children
        // delete clone.actions
        total.push({
            name: label,
            route: value,
            path: `/${path}`,
            ...clone
        })
        if (Array.isArray(item.actions) && item.actions.length > 0) {
            var child = flat(item.actions, label, value)
            console.log('x', child)
            child.map((i) => {
                i.action = true
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

export const useUser2Store = defineStore('user2', () => {
    const { data } = useAuth()
    const menu = computed(() => {
        return data.value.menu2
    })

    const routes = flat(menu.value)

    return {
        menu,
        routes
    }
})
