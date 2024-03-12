/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 12:14:50
 * @LastEditTime: 2024-03-12 08:34:30
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\server\api\user\user\index.get.ts
 */

import { users, userLabels, userColbumLabels, citys } from './data'

export default defineEventHandler(async (evt) => {
    let { limit = 10, page = 1, id, name, cid } = getQuery(evt)
    limit = Number(limit)
    page = Number(page)
    let data = users

    if (id) {
        const user = users.find((u) => u.id === id)
        const userData = Object.keys(user).reduce((total, key) => {
            total.push({ key, label: userLabels[key], value: user[key] })
            return total
        }, [])

        return rs({
            data: userData,
            columns: userColbumLabels
        })
    }
    if (name) {
        // 找到name字段含name的所有数据
        data = users.filter((u) => u.name.includes(name))
    }
    if (cid) {
        // 找到cid字段含cid的所有数据
        data = data.filter((u) => u.cid.toString() === cid.toString())
        // data = users.filter((u) => u.name.includes(name))
    }

    const offset = (page - 1) * limit
    return rs({
        data: data.slice(offset, offset + limit),
        columns: [
            { key: 'index', label: '序号' },
            {
                key: 'id',
                label: '编号',
                component: 'link',
                to: '/user/user/view',
                query: ['id', 'name'],
                props: {
                    class: 'hover:underline',
                    activeClass: 'text-red-500',
                    exactQuery: true
                }
            },
            { key: 'name', label: '姓名' },
            { key: 'email', label: '邮箱' },
            { key: 'city', label: '城市' },
            { key: 'cid', label: '城市编号' },
            { key: 'country', label: '国家' },
            { key: 'actions', label: '操作' }
        ],
        search: [
            {
                key: 'name',
                name: '姓名', // 如不指定，则从columns中找
                placeholder: '姓名啊啊啊'
            },
            {
                key: 'cid',
                placeholder: '城市',
                type: 'select',
                options: citys
            }
        ],
        total: data.length
    })
})
