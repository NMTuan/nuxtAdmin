/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-08 20:42:54
 * @LastEditTime: 2024-02-10 10:30:33
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: /nuxtAdmin/server/api/auth/login.post.ts
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
        token: 'Bearer ' + token
    })
})
