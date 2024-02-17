/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-09 15:22:26
 * @LastEditTime: 2024-02-10 20:00:31
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: /nuxtAdmin/middleware/auth.global.ts
 */
import jwt from 'jsonwebtoken'

export default defineNuxtRouteMiddleware(async (to, from) => {
    const userStore = useUserStore()

    // 有token
    if (userStore.token) {
        // 获取用户信息
        const userInfo = await $fetch('/api/users/me', {
            headers: {
                Authorization: userStore.token
            },
            method: 'GET'
        })
        console.log('userInfo', userInfo)
        if (userInfo.code === 200) {
            userStore.menu = userInfo.data.menu
        }
        // 如果在login页面，则跳转到首页
    }

    // 无token
    if (!userStore.token && to.name !== 'login') {
        //TODO 如果不再非认证页面，及login页面，则跳转到登录
        return navigateTo({ name: 'login' })
    }
})
