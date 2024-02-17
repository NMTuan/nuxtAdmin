/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-01-04 18:31:48
 * @LastEditTime: 2024-02-09 16:17:27
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: /nuxtAdmin/nuxt.config.ts
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    modules: ['@nuxt/ui', '@pinia/nuxt'],
    colorMode: {
        preference: 'dark'
    },
    imports: {
        dirs: ['stores']
    }
})
