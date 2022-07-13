// 引入常量
import { INCREMENT, DECREMENT } from './constant'

// 这个文件用来定义创建action的函数
export function createIncrementAction(value) {
    return { type: INCREMENT, data: value * 1 }
}

export function createDecrementAction(value) {
    return { type: DECREMENT, data: value * 1 }
}
