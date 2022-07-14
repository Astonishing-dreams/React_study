import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/count'
import React, { Component } from 'react'

// 定义Count的UI组件
class Count extends Component {
    state = { sum: 0 }

    increment = () => {
        const { value } = this.number
        this.props.add(value)
    }

    decrement = () => {
        const { value } = this.number
        this.props.decrement(value)
    }

    incrementIfOdd = () => {
        const { value } = this.number
        if (this.props.sum % 2 !== 0) {
            this.props.add(value)
        }
    }

    incrementAsync = () => {
        const { value } = this.number
        this.props.addAsync(value, 1000)
    }

    render() {
        return (
            <div>
                <h2>当前求和为：{this.props.sum}---总人数为：{this.props.persons.length}</h2>
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

// 链接UI与redux，生成容器组件
export default connect(
    (state) => ({
        sum: state.he,
        persons: state.persons
    }),
    {
        add: createIncrementAction,
        decrement: createDecrementAction,
        addAsync: createIncrementAsyncAction
    }
)(Count)

