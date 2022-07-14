
// 引入合并reducer的函数
import { combineReducers } from 'redux'
import countReducer from './count'
import personReducer from './person'

// 总的reducer
export default combineReducers({
    he: countReducer,
    persons: personReducer
})