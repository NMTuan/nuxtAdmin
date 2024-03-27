/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-04 11:25:18
 * @LastEditTime: 2024-03-26 14:52:59
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\server\api\user\user\create.get.ts
 */
import { citys } from './data'

export default defineEventHandler(async (evt) => {
    return rs({
        fields: [
            // { key: 'id', label: '编号' },
            {
                key: 'name',
                label: '姓名',
                required: true,
                disabled: false,
                valids: [
                    { key: 'required', message: '姓名不能为空' },
                    { key: 'min', value: 2, message: '姓名不少于2个字' },
                    { key: 'max', value: 10, message: '姓名不超过10个字' }
                ]
                // valid: {
                //     required: true,
                //     min: 5,
                //     max: 10
                // }
            },
            {
                key: 'email',
                label: '邮箱',
                valids: [
                    { key: 'required', message: '邮箱不能为空' },
                    { key: 'email', message: '邮箱格式不正确' }
                ]
            },
            {
                key: 'cid',
                label: '城市',
                component: 'select',
                options: citys
            },
            {
                key: 'country',
                label: '国家',
                valid: {
                    required: '请填写国家'
                }
            }
            // { key: 'index', label: '序号' }
        ]
    })
})
