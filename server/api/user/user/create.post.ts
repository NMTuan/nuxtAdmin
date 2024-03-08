/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-04 11:25:18
 * @LastEditTime: 2024-03-08 14:45:59
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\server\api\user\user\create.post.ts
 */
import { users, citys } from './data'

export default defineEventHandler(async (evt) => {
    const newData = await readBody(evt)
    newData.id = Date.now().toString(36)
    newData.city = citys.find((city) => city.value === newData.cid)?.label || ''
    // 插到最前面
    users.unshift(newData)
    return rs({
        data: newData
    })
})
