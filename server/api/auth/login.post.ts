/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-08 20:42:54
 * @LastEditTime: 2024-02-29 13:41:40
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\server\api\auth\login.post.ts
 */
import jwt from 'jsonwebtoken'

export default defineEventHandler(async (evt) => {
    const body = await readBody(evt)

    const token = jwt.sign(
        {
            id: 'abc123'
        },
        'secret'
    )

    return rs({
        username: body.username,
        token: token
    })
})
