
import { createStore, applyMiddleware } from 'redux'

// 引入所有的组件对应的reducer
import allReducer from './reducers'

// 引入异步调用的中间件
import thunk from 'redux-thunk'
// 引入composeWithDevTools，用于开发者工具的使用
import { composeWithDevTools } from 'redux-devtools-extension'

// 创建一个store
const store = createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))

// 暴露store
export default store