/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-08 15:31:05
 * @LastEditTime: 2024-03-08 16:22:18
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\composables\useColor.ts
 */
import colors from 'tailwindcss/colors'
import appConfig from '../app.config'

export default () => {
    return (shades: number | string = 500, color: string) => {
        // 黑白，直接返回
        if (['white', 'black'].includes(shades)) {
            return colors[shades]
        }

        //   自定义颜色在tailwind中
        if (color && Object.keys(colors).includes(color)) {
            color = color
        } else {
            color = appConfig?.ui?.primary || 'blue'
        }

        return colors[color][shades] || '#000000'
    }
}
