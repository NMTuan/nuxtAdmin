/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-27 13:47:55
 * @LastEditTime: 2024-03-09 12:07:05
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
                value: 'index',
                icon: 'i-ri-home-3-line',
                activeIcon: 'i-ri-home-3-fill'
            },
            {
                label: '用户管理',
                value: 'user',
                children: [
                    {
                        label: '用户',
                        value: 'user',
                        icon: 'i-ri-user-line',
                        activeIcon: 'i-ri-user-fill',
                        component: 'dataTable',
                        // fetchType: 'POST',
                        actions: [
                            {
                                label: '创建',
                                value: 'create',
                                component: 'form',
                                btns: {
                                    submit: '提交',
                                    cancel: '取消'
                                },
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
            },
            {
                label: 'level1',
                value: 'level1',
                children: [
                    { label: 'level1-1', value: 'level11' },
                    { label: 'level1-2', value: 'level12' },
                    { label: 'level1-3', value: 'level13' }
                ]
            },
            { label: 'level2', value: 'level2' },
            {
                label: 'level3',
                value: 'level3',
                children: [
                    { label: 'level3-1', value: 'level31' },
                    { label: 'level3-2', value: 'level32' },
                    { label: 'level3-3', value: 'level33' }
                ]
            }
        ]
    }
})
