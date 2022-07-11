import React, { Component } from "react";
import axios from 'axios'

export default class App extends Component {

  getStudentInfo = () => {
    axios({
      url: "http://localhost:3000/api1/students",
      method: "get"
    }).then(
      res => {
        console.log('成功了', res.data);
      },
      err => {
        console.log('失败了', err.message);
      }
    )
    axios.get("http://localhost:3000/api2/cars").then(
      res => {
        console.log('成功了', res.data);
      },
      err => {
        console.log('失败了', err.message);
      }
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentInfo}>点我获取学生信息</button>
      </div>
    )
  }
}

