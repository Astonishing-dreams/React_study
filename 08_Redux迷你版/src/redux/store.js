
import { createStore } from 'redux'
// 引入Count对应的reducer
import countReducer from './count_reducer'

// 创建一个store
const store = createStore(countReducer)

// 暴露store
export default store