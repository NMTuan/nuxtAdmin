export default defineEventHandler(async (evt) => {
    return rs({
        fields: [
            { key: 'name', label: '姓名' },
            {
                key: 'sex',
                label: '性别',
                component: 'select',
                options: [
                    { label: '男', value: '1' },
                    { label: '女', value: '2' },
                    { label: '未知', value: '0' }
                ]
            },
            { key: 'height', label: '身高' },
            { key: 'weight', label: '体重' },
            {
                key: 'gradeId',
                label: '所在年级',
                component: 'select',
                options: [
                    { label: '一年级', value: '1' },
                    { label: '二年级', value: '2' },
                    { label: '三年级', value: '3' }
                ]
            }
        ]
    })
})
