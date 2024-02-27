/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-09 15:22:26
 * @LastEditTime: 2024-02-27 16:58:36
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\middleware\auth.global.ts
 */
export default defineNuxtRouteMiddleware(async (to, from) => {
    const userStore = useUserStore()

    // 1 无token，则跳转登录页面
    if (!userStore.token) {
        if (to.name !== 'login') {
            return navigateTo({ name: 'login' })
        }
    } else {
        // 如果在登录页，则跳转至首页
        if (to.name === 'login') {
            return navigateTo({ name: 'index' })
        }

        // 2 有token，没有id，则去获取用户信息
        if (!userStore.id) {
            await userStore.getMe()
        }

        // 3 有id，则认定为已登录，已获取用户信息，直接判断to页面是否有权限即可
        if (!userStore.routes.find((route) => route.route === to.name)) {
            abortNavigation(
                createError({
                    statusCode: 403,
                    statusMessage: 'Forbidden'
                })
            )
        }
    }
})
