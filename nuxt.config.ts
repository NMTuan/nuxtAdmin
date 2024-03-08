/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-01-04 18:31:48
 * @LastEditTime: 2024-03-07 12:36:18
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\nuxt.config.ts
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    modules: ['@nuxt/ui', '@pinia/nuxt', '@sidebase/nuxt-auth'],
    colorMode: {
        preference: 'dark'
    },
    auth: {
        baseURL: '/api',
        globalAppMiddleware: true, // 全局鉴权，需要开放的请手工配置
        provider: {
            type: 'local',
            endpoints: {
                signIn: { path: '/auth/login', method: 'post' },
                signOut: { path: '/auth/logout', method: 'post' },
                signUp: false, //{ path: '/register', method: 'post' },
                getSession: { path: '/auth/me', method: 'get' }
            },
            token: {
                signInResponseTokenPointer: '/data/token',
                maxAgeInSeconds: 60 * 60 * 24
            }
        }
    },
    imports: {
        dirs: ['stores']
    }
})
