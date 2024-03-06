/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-04 11:25:18
 * @LastEditTime: 2024-03-06 11:03:03
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\server\api\user\user\edit.get.ts
 */
import { users, userLabels, citys } from './data'

export default defineEventHandler(async (evt) => {
    const { id } = getQuery(evt)
    const user = users.find((u) => u.id === id)
    const userData = Object.keys(user).reduce((total, key) => {
        total.push({ key, label: userLabels[key], value: user[key] })
        return total
    }, [])
    return rs({
        data: user,
        fields: [
            // { key: 'id', label: '编号' },
            {
                key: 'name',
                label: '姓名'
                // disabled: false
            },
            { key: 'email', label: '邮箱' },
            {
                key: 'cid',
                label: '城市',
                type: 'select',
                options: citys
            },
            { key: 'country', label: '国家' }
            // { key: 'index', label: '序号' }
        ]
    })
})
