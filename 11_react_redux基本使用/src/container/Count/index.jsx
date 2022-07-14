// 该文件是Count的容器组件，用于链接Count的UI 和 redux
import CountUI from '../../components/Count'

// 引入connect，用于：链接UI与redux，生成容器组件
import { connect } from 'react-redux'

import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'

/* 
    mapStateToProps函数的返回值一定要是一个对象
    返回这个对象的key就是传递给UI组件的props的key
    返回这个对象的value就是传递给UI组件的props的value
    a函数主要用于给UI组件传递状态    
*/
function mapStateToProps(state) {
    return { sum: state }
}
/* 
    mapDispatchToProps函数的返回值一定要是一个对象
    返回这个对象的key就是传递给UI组件的props的key
    返回这个对象的value就是传递给UI组件的props的value
    b函数主要用于给UI组件传递操作状态的方法  
*/
function mapDispatchToProps(dispatch) {
    return {
        add: value => dispatch(createIncrementAction(value)),
        decrement: value => dispatch(createDecrementAction(value)),
        addAsync: (value, time) => dispatch(createIncrementAsyncAction(value, time))
    }
}

// 链接UI与redux，生成容器组件
const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI)

// 暴露容器组件
export default CountContainer
