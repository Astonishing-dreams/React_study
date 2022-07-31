import React, { Component } from 'react'

export default class Child extends Component {
    // state = {
    //     users: [
    //         { id: "001", name: "小明1" },
    //         { id: "002", name: "小明2" },
    //         { id: "003", name: "小明3" },
    //     ]
    // }
    state = {
        users: ''
    }
    render() {
        return (
            <div>
                <h3>我是Child组件</h3>
                {this.state.users.map(item => {
                    return (
                        <h4 key={item.id}>{item.name}</h4>
                    )
                })}
            </div>
        )
    }
}
