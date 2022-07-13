import React, { Component } from 'react'
import store from '../../redux/store'

export default class Count extends Component {
    state = { sum: 0 }

    increment = () => {
        const { value } = this.number
        const action = { type: "increment", data: value * 1 }
        store.dispatch(action)
    }

    decrement = () => {
        const { value } = this.number
        store.dispatch({ type: "decrement", data: value * 1 })
    }

    incrementIfOdd = () => {
        const { sum } = this.state
        const { value } = this.number
        if (store.getState() % 2 !== 0) {
            store.dispatch({ type: "increment", data: value * 1 })
        }
    }

    incrementAsync = () => {
        const { value } = this.number
        setTimeout(() => {
            store.dispatch({ type: "increment", data: value * 1 })
        }, 1000);
    }

    render() {
        return (
            <div>
                <h2>当前求和为：{store.getState()}</h2>
                <select ref={c => this.number = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>    &nbsp;&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>    &nbsp;&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>    &nbsp;&nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>奇数+</button>    &nbsp;&nbsp;&nbsp;
                <button onClick={this.incrementAsync}>等一会加</button>    &nbsp;&nbsp;&nbsp;
            </div>
        )
    }
}
