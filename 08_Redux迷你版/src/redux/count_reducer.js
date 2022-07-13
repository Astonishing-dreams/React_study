
// reducer可以初始化状态和加工状态
export default function countReducer(preState = 0, action) {
    // console.log('111', preState, action)
    const { type, data } = action
    switch (type) {
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data

        // 如果不是上面的那么就说明是第一次
        default:
            return preState
    }
}
