/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-14 11:30:19
 * @LastEditTime: 2024-03-14 12:45:50
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\stores\notice.ts
 */
import { defineStore } from 'pinia'
export const useNoticeStore = defineStore('notice', () => {
    const { data: userData } = useAuth()
    const config = useRuntimeConfig()
    const state = ref({})

    const fetchData = async () => {
        if (!userData.value?.notice) {
            return
        }
        const { data } = await useLazyFetch(
            `${config.public.auth.baseURL}${userData.value.notice}`
        )
        if (data.value.data) {
            state.value = data.value.data
        }
    }

    return {
        fetchData,
        state
    }
})
