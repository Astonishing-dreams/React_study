
import { createStore, applyMiddleware } from 'redux'
// 引入Count对应的reducer
import countReducer from './count_reducer'
// 引入异步调用的中间件
import thunk from 'redux-thunk'

// 创建一个store
const store = createStore(countReducer, applyMiddleware(thunk))

// 暴露store
export default store