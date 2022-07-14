
import { createStore, applyMiddleware } from 'redux'

// 引入合并reducer的函数
import { combineReducers } from 'redux'
// 引入Count对应的reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'
// 引入异步调用的中间件
import thunk from 'redux-thunk'
// 引入composeWithDevTools，用于开发者工具的使用
import { composeWithDevTools } from 'redux-devtools-extension'


// 总的reducer
const allReducer = combineReducers({
    he: countReducer,
    persons: personReducer
})

// 创建一个store
const store = createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))

// 暴露store
export default store