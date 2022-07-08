import React from "react";
import './index.css'

export default class Item extends React.Component {
    state = { isEnter: false }
    handleMouse = (isEnter) => {
        return () => {
            this.setState({ isEnter })
        }
    }
    delete = (id) => {
        return () => {
            if (window.confirm('确定删除这个数据吗？')) {
                this.props.deleteTodo(id)
            }
        }
    }
    render() {
        const { id, name, done } = this.props
        const { isEnter } = this.state
        return (
            <li
                onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}
                className={isEnter ? 'active' : ''}
            >
                <label>
                    <input type="checkbox" defaultChecked={done} />
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: isEnter ? 'block' : 'none' }} onClick={this.delete(id)}>删除</button>
            </li>
        )
    }
}
