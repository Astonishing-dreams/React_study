import React, { Component } from "react";
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  // updateState = (obj) => {
  //   this.setState(obj)
  // }

  render() {
    return (
      <div className="container">
        <Search></Search>
        <List></List>
      </div>
    )
  }
}

