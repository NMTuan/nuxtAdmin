/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-27 13:47:55
 * @LastEditTime: 2024-02-29 10:53:30
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
                    { label: '用户', value: 'user', layout: 'view' },
                    {
                        label: '角色',
                        value: 'role',
                        layout: 'list',
                        children: [
                            {
                                label: '查看',
                                value: 'view',
                                layout: 'view',
                                props: ['id']
                            },
                            {
                                label: '编辑',
                                value: 'edit',
                                layout: 'edit',
                                props: ['id', 'name']
                            },
                            {
                                label: '删除',
                                value: 'delete',
                                layout: 'delete',
                                props: ['sex']
                            }
                        ]
                    },
                    { label: '权限', value: 'permission' }
                ]
            }
        ]
    })
})
