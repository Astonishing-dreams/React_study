import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    state = {
        hasError: '' // 用于标识子组件有无报错
    }

    // 当Parent的子组件发生报错的时候会调用这个函数，并携带错误的信息
    static getDerivedStateFromError(err) {
        console.log(err);
        return { hasError: err }
    }

    componentDidCatch() {
        console.log('渲染组件时出错会调用这个钩子，多用来统计错误次数反馈给服务器，用于通知编码人员进行bug的解决');
    }

    render() {
        return (
            <div>
                <h3>我是Parent组件</h3>
                {this.state.hasError ? <h2>网络错误</h2> : <Child></Child>}
            </div>
        )
    }
}
