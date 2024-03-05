/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-04 11:25:18
 * @LastEditTime: 2024-03-05 11:46:38
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\server\api\user\user\edit.get.ts
 */
import { users, userLabels, userColbumLabels } from './data'

export default defineEventHandler(async (evt) => {
    const { id } = getQuery(evt)
    const user = users.find((u) => u.id === id)
    const userData = Object.keys(user).reduce((total, key) => {
        total.push({ key, label: userLabels[key], value: user[key] })
        return total
    }, [])
    return rs({
        data: user
        // columns: userColbumLabels
    })
})
