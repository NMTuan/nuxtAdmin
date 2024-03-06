/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-04 11:25:18
 * @LastEditTime: 2024-03-05 14:24:16
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\server\api\user\user\edit.post.ts
 */
import { users, userLabels, userColbumLabels } from './data'

export default defineEventHandler(async (evt) => {
    const { id } = getQuery(evt)
    const newData = await readBody(evt)
    const user = users.find((u) => u.id === id)

    // 更新数据
    if (user) {
        Object.keys(newData).map((key) => {
            user[key] = newData[key]
        })
    }

    return rs({
        data: user
    })
})
