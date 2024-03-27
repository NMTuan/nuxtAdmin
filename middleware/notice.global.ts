import { useNoticeStore } from '~/stores/notice'

/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-14 11:14:10
 * @LastEditTime: 2024-03-14 17:05:41
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\middleware\notice.global.ts
 */
export default defineNuxtRouteMiddleware((to, from) => {
    const noticeStore = useNoticeStore()
    if (process.client) {
        noticeStore.fetchData()
    }
})
