/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-08 16:25:11
 * @LastEditTime: 2024-03-14 19:45:22
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\app.config.ts
 */
export default defineAppConfig({
    ui: {
        primary: 'sky',
        notifications: {
            position: 'top-0 bottom-auto'
        },
        icons: {
            dynamic: true
        },
        table: {
            th: {
                color: 'text-gray-900 dark:text-gray-200'
            }
        }
    }
})
