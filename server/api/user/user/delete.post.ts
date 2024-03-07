/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-04 11:25:18
 * @LastEditTime: 2024-03-07 20:04:26
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\server\api\user\user\delete.post.ts
 */
import { users, userLabels, userColbumLabels } from './data'

export default defineEventHandler(async (evt) => {
    const { id } = getQuery(evt)
    const newData = await readBody(evt)
    const user = users.find((u) => u.id === id)

    // 删除数据
    if (user) {
        users.splice(users.indexOf(user), 1)
    }

    return rs({})
})
