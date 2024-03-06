/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-08 21:06:56
 * @LastEditTime: 2024-02-09 10:02:45
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: /nuxtAdmin/server/utils/rs.ts
 */

// 定义消息接口
interface Message {
    code: number
    message: string
}

// 定义响应结果接口
interface Result<T> {
    code: number | string | T
    message: string | T
    data: T
    timestamp: number
}

// 定义消息列表
const messages: Message[] = [
    { code: 200, message: '' },
    { code: 404, message: 'Not Found' }
]

// 定义 rs 函数
export function rs<T>(
    code: number | string | T,
    message?: string | T,
    data?: T
): Result<T> {
    // 默认参数
    const defaultCode = 200
    const defaultMessage = ''
    const defaultData: T = {} as T

    // 参数处理
    if (arguments.length === 1) {
        // 只有一个参数，则认为是 data
        data = code as T
        code = defaultCode
        message = defaultMessage
    } else if (arguments.length === 2 && typeof code === 'string') {
        // 只有两个参数，并且第一个参数数据类型为 string 则认为是 message 和 data
        data = message as T
        message = code
        code = defaultCode
    }

    // 查找对应消息
    message =
        messages.find((item) => item.code === code)?.message ||
        message ||
        defaultMessage

    // 返回结果
    return {
        code,
        message,
        data: data || defaultData,
        timestamp: Date.now()
    }
}
