/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-09 10:46:36
 * @LastEditTime: 2024-03-18 15:52:55
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\server\middleware\auth.ts
 */
export default defineEventHandler((evt) => {
    // const token = getHeader(evt, 'Authorization')
    // console.log('token', token)
    const params = getRouterParams(evt)
    const query = getQuery(evt)
    console.log('params ->', params)
    console.log('query ->', query)
})
