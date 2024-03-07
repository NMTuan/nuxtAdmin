/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-27 13:47:55
 * @LastEditTime: 2024-03-07 20:12:55
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\server\api\auth\me.get.ts
 */
export default defineEventHandler(async (evt) => {
    // const auth = evt.auth
    return {
        id: 123456,
        name: 'nickname',
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
                        component: 'dataTable',
                        // fetchType: 'POST',
                        actions: [
                            {
                                label: '创建',
                                value: 'create',
                                positions: ['top']
                            },
                            {
                                label: '查看',
                                value: 'view',
                                component: 'detail',
                                // showType: 'slideover',
                                btns: {
                                    close: '关闭'
                                },
                                positions: ['row'],
                                props: ['id', 'name'],
                                fetchPath: '/user/user'
                            },
                            {
                                label: '编辑',
                                value: 'edit',
                                component: 'form',
                                showType: 'slideover',
                                btns: {
                                    submit: '更新',
                                    cancel: '取消'
                                },
                                positions: ['row'],
                                props: ['id']
                            },
                            {
                                label: '删除',
                                value: 'delete',
                                component: 'confirm',
                                btns: {
                                    submit: '删除',
                                    cancel: '取消'
                                },
                                positions: ['row'],
                                props: ['id']
                            }
                        ]
                    },
                    {
                        label: '角色',
                        value: 'role',
                        component: 'view'
                    },
                    { label: '权限', value: 'permission' }
                ]
            }
        ]
    }
})
