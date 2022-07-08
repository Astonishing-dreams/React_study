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

  addTodo = (todo) => {
    const { todoList } = this.state
    this.setState({ todoList: [todo, ...todoList] })
  }
  deleteTodo = (id) => {
    const { todoList } = this.state
    const newTodos = todoList.filter(todoObj => {
      return todoObj.id !== id
    })
    this.setState({ todoList: newTodos })

    /* todoList.splice(index, 1)
    this.setState({ todoList }) */
  }

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Add addTodo={this.addTodo}></Add>
          <List todoList={this.state.todoList} deleteTodo={this.deleteTodo}></List>
          <Footer></Footer>
        </div>
      </div>
    )
  }
}

