import React, { Component } from 'react'
import store from '../../redux/store'
import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from '../../redux/count_action'

export default class Count extends Component {
    state = { sum: 0 }

    increment = () => {
        const { value } = this.number
        store.dispatch(createIncrementAction(value))
    }

    decrement = () => {
        const { value } = this.number
        store.dispatch(createDecrementAction(value))
    }

    incrementIfOdd = () => {
        const { value } = this.number
        if (store.getState() % 2 !== 0) {
            store.dispatch(createIncrementAction(value))
        }
    }

    incrementAsync = () => {
        const { value } = this.number
        store.dispatch(createIncrementAsyncAction(value, 1000))
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
