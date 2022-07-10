import React from "react";
import Add from './components/Add'
import Footer from './components/Footer'
import List from './components/List'
import './App.css'

export default class App extends React.Component {
  state = {
    todoList: [
      { id: "001", name: "喝酒", done: true },
      { id: "002", name: "烫头", done: false },
      { id: "003", name: "抽烟", done: true }
    ]
  }
  // 添加todo
  addTodo = (todo) => {
    const { todoList } = this.state
    this.setState({ todoList: [todo, ...todoList] })
  }
  // 删除todo
  deleteTodo = (id) => {
    const { todoList } = this.state
    const newTodos = todoList.filter(todoObj => {
      return todoObj.id !== id
    })
    this.setState({ todoList: newTodos })

    /* todoList.splice(index, 1)
    this.setState({ todoList }) */
  }
  // 更新todo
  updateTodo = (id, done) => {
    const { todoList } = this.state
    const newTodos = todoList.map(todoObj => {
      if (todoObj.id === id) todoObj.done = done
      return todoObj
    })
    this.setState({ todoList: newTodos })
  }
  // 全选和全不选
  allChecked = (done) => {
    const { todoList } = this.state
    const newTodos = todoList.map(todo => ({ ...todo, done }))
    this.setState({ todoList: newTodos })
  }
  // 删除已选中
  deleteAll = () => {
    if (window.confirm('是否确认删除全部完成事件？')) {
      const { todoList } = this.state
      const newTodos = todoList.filter(todo => {
        return !todo.done
      })
      this.setState({ todoList: newTodos })
    }
  }

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Add addTodo={this.addTodo}></Add>
          <List
            todoList={this.state.todoList}
            deleteTodo={this.deleteTodo}
            updateTodo={this.updateTodo}
          ></List>
          <Footer
            todoList={this.state.todoList}
            allChecked={this.allChecked}
            deleteAll={this.deleteAll}
          ></Footer>
        </div>
      </div>
    )
  }
}

