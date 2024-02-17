/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-09 10:46:36
 * @LastEditTime: 2024-02-09 14:24:39
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: /nuxtAdmin/server/middleware/auth.ts
 */
export default defineEventHandler((evt) => {
    const token = getHeader(evt, 'Authorization')
    console.log('token', token)
})
