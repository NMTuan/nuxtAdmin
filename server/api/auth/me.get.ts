/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-27 13:47:55
 * @LastEditTime: 2024-03-18 15:59:15
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\server\api\auth\me.get.ts
 */
export default defineEventHandler(async (evt) => {
    // const auth = evt.auth
    return {
        id: 123456,
        // name: 'Floyd Fletcher',
        // avatar: 'https://www.loliapi.com/acg/pp/',
        menu: [
            {
                label: '首页',
                value: 'index',
                icon: 'i-ri-home-3-line'
            },
            {
                label: '学生管理',
                value: 'student',
                component: 'dataTable',
                actions: [
                    {
                        label: '创建',
                        value: 'create',
                        icon: 'i-ri-add-circle-line',
                        component: 'form',
                        positions: ['top']
                    },
                    {
                        label: '编辑',
                        value: 'edit',
                        icon: 'i-ri-edit-line',
                        component: 'form',
                        positions: ['row'],
                        query: ['id']
                    },
                    {
                        label: '删除',
                        value: 'delete',
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
                value: 'user',
                icon: 'i-ri-user-4-line',
                children: [
                    {
                        label: '用户',
                        value: 'user',
                        icon: 'i-ri-file-user-line',
                        component: 'dataTable',
                        // fetchType: 'POST',
                        actions: [
                            {
                                label: '创建',
                                value: 'create',
                                component: 'form',
                                icon: 'i-ri-add-circle-line',
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
                                icon: 'i-ri-list-view',
                                // showType: 'slideover',
                                btns: {
                                    close: '关闭'
                                },
                                positions: ['row'],
                                query: ['id', 'name']
                                // fetchPath: '/user/user'
                            },
                            {
                                label: '编辑',
                                value: 'edit',
                                component: 'form',
                                icon: 'i-ri-edit-line',
                                showType: 'slideover',
                                btns: {
                                    submit: '更新',
                                    cancel: '取消'
                                },
                                positions: ['row'],
                                query: ['id']
                            },
                            {
                                label: '删除',
                                value: 'delete',
                                component: 'confirm',
                                icon: 'i-ri-delete-bin-line',
                                // hideLabel: true,
                                color: 'red',
                                message: '确定要删除此信息么？',
                                btns: {
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
                    {
                        label: 'level1-2',
                        value: 'level12',
                        icon: 'i-ri-bar-chart-box-line',
                        children: [
                            {
                                label: 'level1-2-1',
                                value: 'level121',
                                icon: 'i-ri-archive-line'
                            },
                            { label: 'level1-2-2', value: 'level122' },
                            { label: 'level1-2-3', value: 'level123' }
                        ]
                    },
                    { label: 'level1-3', value: 'level13' }
                ]
            },
            { label: 'level2', value: 'level2' },
            {
                label: 'level3',
                value: 'level3',
                children: [
                    {
                        label: 'level3-1',
                        value: 'level31',
                        children: [
                            {
                                label: 'level3-1-1',
                                value: 'level311',
                                hidden: true
                            },
                            {
                                label: 'level3-1-2',
                                value: 'level312',
                                hidden: false
                            },
                            {
                                label: 'level3-1-3',
                                value: 'level313',
                                hidden: true
                            }
                        ]
                    },
                    { label: 'level3-2', value: 'level32' },
                    { label: 'level3-3', value: 'level33' }
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
                type: 'darkMode'
            },
            {
                type: 'fullScreen'
            },
            'i18n',
            {
                type: 'dropdown',
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
                type: 'exit',
                label: '退出',
                icon: 'i-ri-logout-box-r-line',
                to: '/logout'
            }
        ],
        notice: '/auth/notice'
    }
})
