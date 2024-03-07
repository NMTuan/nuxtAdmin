/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-27 13:47:55
 * @LastEditTime: 2024-03-07 11:02:54
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\server\api\auth\me.get.ts
 */
export default defineEventHandler(async (evt) => {
    // const auth = evt.auth
    return {
        id: 123456,
        name: 'nickname',
        menu2: [
            { label: '首页', value: 'index' },
            {
                label: '用户管理',
                value: 'user',
                children: [
                    {
                        label: '用户',
                        value: 'user',
                        type: 'dataTable',
                        actions: [
                            {
                                label: '创建',
                                value: 'create',
                                type: 'view',
                                positions: ['top']
                            },
                            {
                                label: '查看',
                                value: 'view',
                                type: 'view',
                                positions: ['row'],
                                props: ['id', 'city']
                            },
                            {
                                label: '修改',
                                value: 'edit',
                                type: 'edit',
                                positions: ['row'],
                                props: ['id']
                            },
                            {
                                label: '删除',
                                value: 'delete',
                                type: 'delete',
                                positions: ['row'],
                                props: ['id']
                            }
                        ]
                    },
                    { label: '角色', value: 'role' }
                ]
            },
            {
                label: '一级菜单1',
                value: 'level1',
                children: [
                    {
                        label: '二级菜单1',
                        value: 'level11',
                        children: [
                            { label: '三级菜单1', value: 'level111' },
                            { label: '三级菜单2', value: 'level112' }
                        ]
                    },
                    { label: '二级菜单2', value: 'level12' }
                ]
            }
        ],
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
    }
})
