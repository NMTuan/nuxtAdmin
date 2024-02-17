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
                    { label: '角色', value: 'role' },
                    { label: '权限', value: 'permission' }
                ]
            }
        ]
    })
})
