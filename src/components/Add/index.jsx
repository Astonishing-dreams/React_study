import React from "react";
import { v4 as uuidv4 } from 'uuid';
import './index.css'


export default class Add extends React.Component {
    handleKeyUp = (e) => {
        const { value } = e.target
        // 判断是否为回车
        if (e.keyCode !== 13) return;
        // 不能为空
        if (value.trim() === '') return alert('不能输入为空')
        // 生成一个新的
        const todoObj = { id: uuidv4(), name: value, done: false }
        // 将数据传给Add组件
        this.props.addTodo(todoObj)
        e.target.value = ''
    }
    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
