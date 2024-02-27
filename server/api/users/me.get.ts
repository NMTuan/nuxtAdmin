/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-27 13:47:55
 * @LastEditTime: 2024-02-27 16:40:04
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\server\api\users\me.get.ts
 */
export default defineEventHandler(async (evt) => {
    // const auth = evt.auth
    return rs({
        menu: [
            {
                label: '首页',
                value: 'index'
            },
            {
                label: '用户管理',
                value: 'user',
                children: [
                    { label: '用户', value: 'user' },
                    {
                        label: '角色',
                        value: 'role',
                        children: [
                            { label: '查看', value: 'view' },
                            { label: '编辑', value: 'edit' },
                            { label: '删除', value: 'delete' }
                        ]
                    },
                    { label: '权限', value: 'permission' }
                ]
            }
        ]
    })
})
