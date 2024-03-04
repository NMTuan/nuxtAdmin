/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-27 13:47:55
 * @LastEditTime: 2024-03-04 14:34:02
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\server\api\users\me.get.ts
 */
export default defineEventHandler(async (evt) => {
    // const auth = evt.auth
    return rs({
        user: {
            id: 123456
        },
        api: {
            url: '/api',
            login: '',
            logout: '',
            getMe: ''
        },
        menu: [
            {
                label: '首页',
                value: 'index'
            },
            {
                label: '用户管理',
                value: 'user',
                children: [
                    {
                        label: '用户',
                        value: 'user',
                        layout: 'dataTable',
                        // fetchType: 'POST',
                        children: [
                            {
                                label: '创建',
                                value: 'create',
                                positions: ['table']
                            },
                            {
                                label: '查看',
                                value: 'view',
                                positions: ['row'],
                                layout: 'view',
                                props: ['id'],
                                fetchPath: '/user/user'
                            },
                            {
                                label: '编辑',
                                value: 'edit',
                                positions: ['row'],
                                layout: 'edit',
                                props: ['id', 'name']
                            },
                            {
                                label: '删除',
                                value: 'delete',
                                positions: ['row'],
                                layout: 'delete',
                                props: ['city']
                            }
                        ]
                    },
                    {
                        label: '角色',
                        value: 'role',
                        layout: 'view'
                    },
                    { label: '权限', value: 'permission' }
                ]
            }
        ]
    })
})
