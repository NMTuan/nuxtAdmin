/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-09 14:29:39
 * @LastEditTime: 2024-02-10 19:52:07
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: /nuxtAdmin/stores/user.ts
 */
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const id = ref('')
    const name = ref('')
    const nick = ref('')
    const email = ref('')
    const role = ref([])
    const token = ref('')
    const menu = ref([])

    return {
        id,
        name,
        token,
        menu
    }
})
