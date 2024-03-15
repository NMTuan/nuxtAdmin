/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-15 10:39:24
 * @LastEditTime: 2024-03-15 14:12:35
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\i18n.config.ts
 */
import { defineI18nConfig } from 'vue-i18n'
import en from './locales/en.js'
import zh from './locales/zh.js'

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'zh',
    messages: {
        en,
        zh
    }
}))
