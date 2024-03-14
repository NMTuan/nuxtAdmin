/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-14 11:30:19
 * @LastEditTime: 2024-03-14 13:36:58
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
        // const { data } = await useLazyFetch(
        //     `${config.public.auth.baseURL}${userData.value.notice}`
        // )
        const data = await $fetch(
            `${config.public.auth.baseURL}${userData.value.notice}`
        )
        console.log('x', data)
        if (data.data) {
            state.value = data.data
        }
    }

    return {
        fetchData,
        state
    }
})
