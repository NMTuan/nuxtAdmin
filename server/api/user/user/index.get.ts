/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 12:14:50
 * @LastEditTime: 2024-03-12 10:48:48
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\server\api\user\user\index.get.ts
 */

import { users, userLabels, userColbumLabels, citys } from './data'

export default defineEventHandler(async (evt) => {
    let { limit = 10, page = 1, id, name, email, cid, country } = getQuery(evt)
    limit = Number(limit)
    page = Number(page)
    let data = users

    if (id) {
        data = data.find((u) => u.id === id)
    }
    if (name) {
        data = data.filter((u) => u.name.includes(name))
    }
    if (email) {
        data = data.filter((u) => u.email.includes(email))
    }
    if (cid) {
        data = data.filter((u) => u.cid.toString() === cid)
    }
    if (country) {
        data = data.filter((u) => u.country.includes(country))
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
        advSearch: [
            { key: 'id' },
            { key: 'name' },
            { key: 'email' },
            { key: 'cid', type: 'select', options: citys },
            { key: 'country' }
        ],
        filters: [
            { label: '全部', query: {} },
            { label: '未处理', query: { name: 'a' } },
            { label: '已处理', query: { email: 'b' } }
        ],
        total: data.length
    })
})
