import React, { Component } from "react";
import './index.css'

export default class Footer extends Component {
    allChecked = (e) => {
        // console.log(e.target.checked);
        this.props.allChecked(e.target.checked)
    }
    deleteAll = () => {
        this.props.deleteAll()
    }
    render() {
        const { todoList } = this.props
        const doneCount = todoList.reduce((prevValue, current) => {
            return prevValue + (current.done ? 1 : 0)
        }, 0)
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox"
                        checked={doneCount === todoList.length}
                        onChange={this.allChecked}
                    />
                </label>
                <span>
                    <span>已完成
                        {doneCount}
                    </span> / 全部{todoList.length}
                </span>
                <button className="btn btn-danger" onClick={this.deleteAll}>清除已完成任务</button>
            </div>
        )
    }
}
