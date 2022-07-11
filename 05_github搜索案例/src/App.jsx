import React, { Component } from "react";
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  state = {
    items: [],
    isFirst: true,
    isLoading: false,
    error: ''
  }
  updateState = (obj) => {
    this.setState(obj)
  }

  render() {
    return (
      <div className="container">
        <Search getItems={this.updateState}></Search>
        <List {...this.state}></List>
      </div>
    )
  }
}

