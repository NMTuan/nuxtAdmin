/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-04 11:25:18
 * @LastEditTime: 2024-03-26 17:18:54
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\server\api\user\user\edit.get.ts
 */
import { users, userLabels, citys } from './data'

export default defineEventHandler(async (evt) => {
    const { id } = getQuery(evt)
    const user = users.find((u) => u.id === id)
    const userData = Object.keys(user).reduce((total, key) => {
        total.push({ key, label: userLabels[key], value: user[key] })
        return total
    }, [])
    return rs({
        data: user,
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
                key: 'createAt',
                label: '创建时间',
                component: 'date',
                format: 'yyyy-MM-dd',
                showFormat: 'y-M-d'
            },
            {
                key: 'range',
                label: '时间范围',
                component: 'dateRange',
                format: 'yyyy-MM-dd',
                showFormat: 'y-M-d'
            },
            {
                key: 'description',
                label: '描述',
                component: 'textarea',
                placeholder: '请填写描述信息',
                autoresize: true,
                maxrows: '5'
                // rows: '20'
            },
            {
                key: 'content',
                label: '内容',
                component: 'wangEditor'
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
                // multiple: true
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
