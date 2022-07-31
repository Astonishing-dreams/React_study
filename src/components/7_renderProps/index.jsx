import React, { Component } from 'react'

export default class Parent extends Component {
    render() {
        return (
            <div>
                <h3>我是Parent组件</h3>
                <A render={(name) => <B name={name} />} />
            </div>
        )
    }
}

class A extends Component {
    state = { name: '123' }
    render() {
        return (
            <div>
                <h3>我是A组件</h3>
                {this.props.render(this.state.name)}
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div>
                <h3>我是B组件</h3>
                {this.props.name}
            </div>
        )
    }
}