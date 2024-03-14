/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-14 11:26:03
 * @LastEditTime: 2024-03-14 12:07:16
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\server\api\auth\notice.get.ts
 */
export default defineEventHandler(async (evt) => {
    return rs({
        notice: {
            count: Math.round(Math.random() * 3),
            color: 'red'
        },
        chat: {
            count: Math.round(Math.random() * 3)
        }
    })
})
