/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-18 11:49:05
 * @LastEditTime: 2024-03-25 13:29:42
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtAdmin\server\api\student\index.get.ts
 */
export default defineEventHandler(async (evt) => {
    return rs({
        data: [
            {
                id: '1',
                name: '张三',
                sex: '1',
                height: '120',
                weight: '26',
                gradeId: '1'
            },
            {
                id: '2',
                name: '李四',
                sex: '1',
                height: '124',
                weight: '24',
                gradeId: '1'
            },
            {
                id: '2',
                name: '王五',
                sex: '2',
                height: '135',
                weight: '23',
                gradeId: '2'
            },
            {
                id: '2',
                name: '赵六',
                sex: '1',
                height: '135',
                weight: '29',
                gradeId: '2'
            }
        ],
        fields: [
            { key: 'id', label: '编号' },
            { key: 'name', label: '姓名' },
            {
                key: 'sex',
                label: '性别',
                component: 'enum',
                items: [
                    { key: '1', label: '男' },
                    { key: '2', label: '女' },
                    { key: '0', label: '未知' }
                ]
            },
            { key: 'height', label: '身高（cm）' },
            { key: 'weight', label: '体重（kg）' },
            {
                key: 'gradeId',
                label: '所在年级',
                component: 'enum',
                items: [
                    { key: '1', label: '一年级' },
                    { key: '2', label: '二年级' },
                    { key: '3', label: '三年级' }
                ]
            },
            { key: 'actions', label: '操作' }
        ],
        search: [
            {
                key: 'name',
                label: '姓名',
                placeholder: '请输入学生姓名'
            },
            {
                key: 'sex',
                label: '性别',
                placeholder: '请选择学生性别',
                component: 'select',
                options: [
                    { label: '男', value: '1' },
                    { label: '女', value: '2' },
                    { label: '未知', value: '0' }
                ]
            }
        ],
        advSearch: [
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
        ],
        filters: [
            { label: '全部学生', query: {} },
            { label: '一年级女生', query: { sex: '2', groudId: '1' } },
            { label: '二年级男生', query: { sex: '1', groudId: '2' } }
        ],
        total: 4
    })
})
