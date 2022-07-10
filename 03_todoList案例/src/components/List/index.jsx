import React from "react";
import Item from '../Item'
import './index.css'

export default class List extends React.Component {
    render() {
        return (
            <ul className="todo-main">
                {
                    this.props.todoList.map((todo, index) => {
                        return (
                            <Item
                                key={todo.id}
                                {...todo}
                                deleteTodo={this.props.deleteTodo}
                                updateTodo={this.props.updateTodo}
                            ></Item>
                        )
                    })
                }
            </ul>
        )
    }
}
