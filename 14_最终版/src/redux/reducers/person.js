import { ADD_PERSON } from '../constant'

const initState = [
    { name: "张三", age: 121, id: '001' },
    { name: "李四", age: 132, id: '002' },
]
export default function personReducer(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState]
        default:
            return preState
    }
}