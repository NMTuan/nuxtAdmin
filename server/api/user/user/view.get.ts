/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-04 11:25:18
 * @LastEditTime: 2024-03-04 14:27:12
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\server\api\user\user\view.get.ts
 */
import { users } from '../user.get'

const labels = {
    id: 'ID',
    name: '姓名',
    email: '邮箱',
    city: '城市',
    country: '国家'
}
export default defineEventHandler(async (evt) => {
    // const pageStore = usePageStore()
    const query = getQuery(evt)
    const user = users.find((u) => u.id === query.id)
    const userData = Object.keys(user).reduce((total, key) => {
        total.push({ key, label: labels[key], value: user[key] })
        return total
    }, [])
    return rs({
        data: userData,
        columns: [
            { key: 'label', label: '项' },
            { key: 'value', label: '值' }
        ]
    })
})
