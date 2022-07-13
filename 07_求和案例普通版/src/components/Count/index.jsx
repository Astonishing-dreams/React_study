import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Count extends Component {
    state = { sum: 0 }

    increase = () => {
        const { sum } = this.state
        const { value } = this.number
        this.setState({ sum: sum + value * 1 })
    }

    decrease = () => {
        const { sum } = this.state
        const { value } = this.number
        this.setState({ sum: sum - value * 1 })
    }

    incrementIfOdd = () => {
        const { sum } = this.state
        const { value } = this.number
        if (sum % 2 !== 0) {
            this.setState({ sum: sum + value * 1 })
        }
    }

    incrementAsync = () => {
        const { sum } = this.state
        const { value } = this.number
        setTimeout(() => {
            this.setState({ sum: sum + value * 1 })
        }, 1000);
    }

    render() {
        return (
            <div>
                <h2>当前求和为：{this.state.sum}</h2>
                <select ref={c => this.number = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>    &nbsp;&nbsp;&nbsp;
                <button onClick={this.increase}>+</button>    &nbsp;&nbsp;&nbsp;
                <button onClick={this.decrease}>-</button>    &nbsp;&nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>奇数+</button>    &nbsp;&nbsp;&nbsp;
                <button onClick={this.incrementAsync}>等一会加</button>    &nbsp;&nbsp;&nbsp;
            </div>
        )
    }
}
