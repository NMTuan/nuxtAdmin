/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-27 13:47:55
 * @LastEditTime: 2024-03-24 17:30:59
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\server\api\auth\me.get.ts
 */
export default defineEventHandler(async (evt) => {
    // const auth = evt.auth
    return rs({
        id: 123456,
        // name: 'Floyd Fletcher',
        // avatar: 'https://www.loliapi.com/acg/pp/',
        menu: [
            {
                label: '首页',
                key: 'index',
                icon: 'i-ri-home-3-line'
            },
            {
                label: '学生管理',
                key: 'student',
                component: 'dataTable',
                actions: [
                    {
                        key: 'create',
                        label: '创建',
                        icon: 'i-ri-add-circle-line',
                        component: 'form',
                        positions: ['top']
                    },
                    {
                        key: 'edit',
                        label: '编辑',
                        icon: 'i-ri-edit-line',
                        component: 'form',
                        positions: ['row'],
                        query: ['id']
                    },
                    {
                        key: 'delete',
                        label: '删除',
                        icon: 'i-ri-delete-bin-line',
                        color: 'red',
                        component: 'confirm',
                        message: '确定要删除此学生吗？',
                        positions: ['row'],
                        query: ['id']
                    }
                ]
            },
            {
                label: '用户管理',
                key: 'user',
                icon: 'i-ri-user-4-line',
                children: [
                    {
                        label: '用户',
                        key: 'user',
                        icon: 'i-ri-file-user-line',
                        component: 'dataTable',
                        actions: [
                            {
                                key: 'create',
                                label: '创建',
                                component: 'form',
                                icon: 'i-ri-add-circle-line',
                                fetchType: 'POST',
                                // local: {
                                //     submit: '提交',
                                //     cancel: '取消'
                                // },
                                positions: ['top']
                            },
                            {
                                key: 'view',
                                label: '查看',
                                title: '看一看',
                                component: 'detail',
                                icon: 'i-ri-list-view',
                                // local: {
                                //     close: '关闭'
                                // },
                                positions: ['row'],
                                query: ['id', 'name']
                            },
                            {
                                key: 'edit',
                                label: '编辑',
                                component: 'form',
                                icon: 'i-ri-edit-line',
                                showType: 'slideover',
                                // local: {
                                //     submit: '更新',
                                //     cancel: '取消'
                                // },
                                positions: ['row'],
                                query: ['id']
                            },
                            {
                                key: 'delete',
                                label: '',
                                title: '删一下',
                                component: 'confirm',
                                icon: 'i-ri-delete-bin-line',
                                color: 'red',
                                message: '确定要删除此信息么？',
                                local: {
                                    submit: '删除',
                                    cancel: '取消'
                                },
                                positions: ['row'],
                                query: ['id']
                            }
                        ]
                    },
                    {
                        label: '角色',
                        key: 'role',
                        component: 'view'
                    },
                    { label: '权限', key: 'permission' }
                ]
            },
            {
                label: 'level1',
                key: 'level1',
                children: [
                    { label: 'level1-1', key: 'level11' },
                    {
                        label: 'level1-2',
                        key: 'level12',
                        icon: 'i-ri-bar-chart-box-line',
                        children: [
                            {
                                label: '学生管理',
                                key: 'student',
                                component: 'dataTable',
                                fetchUrl: '/student',
                                actions: [
                                    {
                                        key: 'create',
                                        label: '创建',
                                        icon: 'i-ri-add-circle-line',
                                        component: 'form',
                                        positions: ['top']
                                    },
                                    {
                                        key: 'edit',
                                        label: '编辑',
                                        icon: 'i-ri-edit-line',
                                        component: 'form',
                                        positions: ['row'],
                                        query: ['id']
                                    },
                                    {
                                        key: 'delete',
                                        label: '删除',
                                        icon: 'i-ri-delete-bin-line',
                                        color: 'red',
                                        component: 'confirm',
                                        message: '确定要删除此学生吗？',
                                        positions: ['row'],
                                        query: ['id']
                                    }
                                ]
                            },
                            { label: 'level1-2-2', key: 'level122' },
                            { label: 'level1-2-3', key: 'level123' }
                        ]
                    },
                    { label: 'level1-3', key: 'level13' }
                ]
            },
            { label: 'level2', key: 'level2' },
            {
                label: 'level3',
                key: 'level3',
                children: [
                    {
                        label: 'level3-1',
                        key: 'level31',
                        children: [
                            {
                                label: 'level3-1-1',
                                key: 'level311',
                                hidden: true
                            },
                            {
                                label: 'level3-1-2',
                                key: 'level312',
                                hidden: false
                            },
                            {
                                label: 'level3-1-3',
                                key: 'level313',
                                hidden: true
                            }
                        ]
                    },
                    { label: 'level3-2', key: 'level32' },
                    { label: 'level3-3', key: 'level33' }
                ]
            }
        ],
        topbar: [
            {
                label: '设置',
                to: '/level1/level13'
            },
            {
                icon: 'i-ri-notification-3-line',
                to: '/user/role',
                noticeKey: 'notice'
            },
            {
                icon: 'i-ri-message-2-line',
                noticeKey: 'chat'
            },
            {
                component: 'darkMode'
            },
            {
                component: 'fullScreen'
            },
            'i18n',
            {
                component: 'dropdown',
                label: 'Floyd Fletcher',
                image: 'https://www.loliapi.com/acg/pp/',
                dropDown: [
                    [
                        {
                            label: 'profile',
                            icon: 'i-ri-user-3-line',
                            to: '/level3/level32'
                        }
                    ],
                    [
                        {
                            label: 'exit',
                            icon: 'i-ri-logout-box-r-line',
                            to: '/logout'
                        }
                    ]
                ]
            },
            {
                component: 'exit',
                label: '退出',
                icon: 'i-ri-logout-box-r-line',
                to: '/logout'
            }
        ],
        notice: '/auth/notice'
    })
})
